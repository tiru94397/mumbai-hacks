RealMind — By Virtual Factory

RealMind is an AI-powered creation engine that helps users generate ideas, images, content, prompts, UI designs, and code through a single unified interface.
Built for hackathons, creators, students, and builders who want fast, structured results.

🚀 Features

Universal AI Generation (ideas, text, images, prompts, UI, code)

Smart Intent Detection

Clean, fast UI (React + Tailwind + Framer Motion)

Firebase Authentication

Project Export Tools

Lightweight API for developers

🧠 Tech Stack

Frontend: React.js, Tailwind CSS, Framer Motion
Backend: Node.js + Express
Database: Firebase / Firestore
Auth: Firebase Auth
AI Models: Gemini / OpenAI / Replicate
Deploy: Vercel (frontend) + Render/Railway (backend)

📂 Project Structure
realmind/
│── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── utils/
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── styles/
│   └── public/
│
└── README.md

⚙️ Installation
git clone https://github.com/virtualfactory-ai/realmind.git
cd realmind
npm install
npm run dev

🔑 Environment Variables

Create a .env in the backend:

OPENAI_API_KEY=
REPLICATE_API_KEY=
FIREBASE_API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=

📡 API Endpoints
POST /generate

Generate text, ideas, images, code, or UI.

POST /auth

Login or signup (Firebase).

GET /history

Fetch user generation history.

👥 Team – Virtual Factory

M V V Tiru Venkatesh

A Prabhaas Tejj

🏁 Hackathon Goal

Build the fastest, most intuitive AI idea-generation tool for Mumbai Hacks.

🔥 Pitch Line

“RealMind — Type your spark. Watch it turn into reality.”
