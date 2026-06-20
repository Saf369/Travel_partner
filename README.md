# 🚧 Travel Partner App — Building Stage

## 📌 Project Status

This project is currently under active development.

## AI RAG Travel Partner

A full-stack AI-powered travel planning application.

## Project Structure

```
Travel_partner/
├── backend/          → Node.js Express API server
│   ├── src/modules/  → Domain modules
│   ├── src/config/   → Config
│   └── prisma/       → PostgreSQL schema
│
├── web-frontend/     → Next.js web dashboard (port 3000)
│   └── src/app/      → UI pages calling backend API
│
└── phone-frontend/   → Expo React Native mobile app
    ├── src/app/      → Screens: Home, Partner, Backpack, Settings
    └── src/lib/api.ts→ API client pointing to backend
```

## Running the project

### 1. Backend (required first)
```bash
cd backend
npm install
npm run dev                   # runs on Node
```

### 2. Web Frontend
```bash
cd web-frontend
cp .env.example .env.local
npm install
npm run dev                   # runs on http://localhost:3000
```

### 3. Phone (React Native)
```bash
cd phone-frontend
cp .env.example .env.local
npm install
npm run android               # or: npm run ios
```

## Tech Stack
- **Backend:** Node.js, Express, Groq (chat), Gemini (itinerary), Qdrant (RAG), PostgreSQL + Prisma
- **Web Frontend:** Next.js, Tailwind CSS
- **Phone:** Expo React Native

**Travel Partner** is a platform designed to help travelers find compatible travel companions, plan trips together, share itineraries, and connect with like-minded explorers.

---

## 🚀 Planned Features

### 👤 User Authentication
- Sign up and login
- Google authentication
- Secure account management

### 🌍 Travel Profiles
- Create personalized travel profiles
- Add travel interests and preferences
- Upload profile pictures

### 🤝 Travel Partner Matching
- Find travelers with similar interests
- Match based on destination, budget, and travel style
- Send and receive travel requests

### 🗺️ Trip Planning
- Create travel plans
- Share itineraries
- Collaborate with travel partners

### 💬 Real-Time Chat
- One-to-one messaging
- Trip discussion rooms
- Instant notifications

### 📍 Destination Discovery
- Explore popular destinations
- Travel recommendations
- Trip inspiration

### ⭐ Reviews & Ratings
- Rate travel partners
- Build trust within the community
- User feedback system

---

## 🛠️ Tech Stack

### Frontend
- React / Next.js
- Tailwind CSS
- TypeScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- Firebase Auth / NextAuth

### Deployment
- Vercel
- Render

---

## 📅 Current Development Progress

- [x] Project Setup
- [x] UI Design Planning
- [ ] Authentication System
- [ ] User Profiles
- [ ] Travel Matching Algorithm
- [ ] Chat Integration
- [ ] Trip Planner
- [ ] Notifications
- [ ] Testing
- [ ] Deployment

---

## 🎯 Vision

Traveling is more enjoyable when shared with the right people. Travel Partner aims to make finding trusted travel companions simple, safe, and enjoyable for everyone.

---

## 🤝 Contributions

The project is currently in the building stage. Feedback, feature suggestions, and contributions are welcome.

---

## ⚠️ Note

This application is under development and some features may be incomplete, unstable, or subject to change.

Stay tuned for updates! 🚀🌍✈️
## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
