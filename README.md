# RunSync Test

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Strava API](https://img.shields.io/badge/API-Strava-orange?style=for-the-badge&logo=strava&logoColor=white)
![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📘 Overview

This is a small test project created to explore the integration of the **Strava API** within a modern web framework. The primary goal was to learn how to authenticate users via OAuth2, fetch activity data, and render that data in a clean, responsive front-end.

---

## 🔑 What was tested

- ✅ Connecting to Strava via OAuth2 authentication
- ✅ Handling access tokens and scopes
- ✅ Fetching recent activities
- ✅ Debugging common Next.js + API issues (routing, dependencies)

---

## 💡 Technologies Used

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Strava API**
- **Axios**
- **Vercel (deployment)**

---

## ⚙️ Installation

### Prerequisites

- Node.js (LTS)
- NPM
- A registered Strava Developer App
- `.env.local` file with your credentials

### Setup

```bash
git clone https://github.com/cindybruikman/runsync-test.git
cd runsync-test
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

In your `.env.local`:

```env
STRAVA_CLIENT_ID=your_client_id
STRAVA_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_STRAVA_REDIRECT_URI=http://localhost:3000/auth/callback
```

---

## 🛠 Troubleshooting

### Common issues I resolved:

- **404 after login**  
  → Fixed by switching to App Router structure in Next.js 13+

- **Module not found: 'axios'**  
  → Solved with `npm install axios`

---

## 🎓 What I Learned

This test taught me how to:
- Work with OAuth2
- Connect with external APIs securely
- Debug routing and library errors in Next.js
- Render API-driven data from Strava

---

## 📄 License

MIT
