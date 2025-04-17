import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const client_id = process.env.STRAVA_CLIENT_ID;
  const client_secret = process.env.STRAVA_CLIENT_SECRET;

  try {
    const tokenResponse = await axios.post('https://www.strava.com/oauth/token', {
      client_id,
      client_secret,
      code,
      grant_type: 'authorization_code',
    });

    const access_token = tokenResponse.data.access_token;

    const activitiesResponse = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const activities = activitiesResponse.data.slice(0, 5);

    const html = `
      <h1>Laatste Activiteiten</h1>
      <ul>
        ${activities
          .map(
            (act) => `<li>${act.name} - ${(act.distance / 1000).toFixed(2)} km - ${(act.moving_time / 60).toFixed(1)} min</li>`
          )
          .join('')}
      </ul>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Strava callback error:', error);
    return new NextResponse('Fout bij ophalen van gegevens.', { status: 500 });
  }
}