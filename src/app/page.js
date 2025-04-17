'use client';
import React from 'react';

export default function Home() {
  const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/api/callback';
  const SCOPE = 'read,activity:read';

  const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=${SCOPE}`;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>RunSync Strava Test</h1>
      <a href={stravaAuthUrl}>
        <button>Connect with Strava</button>
      </a>
    </div>
  );
}