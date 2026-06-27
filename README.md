<h1 align="center">🎯 Talentra — Remote Interview Platform</h1>

<p align="center">
  A full-stack platform for conducting real-time technical interviews with collaborative code editing, video calls, and live chat.
</p>

<p align="center">
  <a href="https://mbilalhussain-talentra-ip.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀 Live Demo-Visit Now-6366f1?style=for-the-badge" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb" />
  <img src="https://img.shields.io/badge/Stream-Video%20%26%20Chat-005FFF?style=flat" />
  <img src="https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat" />
  <img src="https://img.shields.io/badge/Inngest-Background%20Jobs-000000?style=flat" />
</p>

---

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## ✨ Features

- 🧑‍💻 **VSCode-Powered Code Editor**
- 🔐 **Authentication via Clerk**
- 🎥 **1-on-1 Video Interview Rooms**
- 🧭 **Dashboard with Live Stats**
- 🔊 **Mic & Camera Toggle, Screen Sharing & Recording**
- 💬 **Real-time Chat Messaging**
- ⚙️ **Secure Code Execution in Isolated Environment**
- 🎯 **Auto Feedback — Success / Fail based on test cases**
- 🎉 **Confetti on Success + Notifications on Fail**
- 🧩 **Practice Problems Page (solo coding mode)**
- 🔒 **Room Locking — allows only 2 participants**
- 🧠 **Background Jobs with Inngest (async tasks)**
- 🧰 **REST API with Node.js & Express**
- ⚡ **Data Fetching & Caching via TanStack Query**
- 🤖 **CodeRabbit for PR Analysis & Code Optimization**
- 🧑‍💻 **Git & GitHub Workflow (branches, PRs, merges)**
- 🚀 **Deployment on Render & Vercel (free-tier friendly)**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS, DaisyUI |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Auth | Clerk |
| Video & Chat | Stream Video SDK, Stream Chat |
| Background Jobs | Inngest |
| Data Fetching | TanStack Query |
| Code Editor | Monaco Editor |
| Deployment | Vercel (frontend) + Render (backend) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Clerk account
- Stream account
- Inngest account

### 1. Clone the repo

```bash
git clone https://github.com/mbilalhussain15/Talentra-Remote-Interview-Platform.git
cd Talentra-Remote-Interview-Platform
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

```bash
npm run dev
```

App will be running at `http://localhost:5173`

---

## 📁 Project Structure

```
Talentra-Interviewer-Platform/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── pages/     # Route pages
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
└── backend/           # Express API
    └── src/
        ├── controllers/
        ├── routes/
        ├── models/
        └── lib/
```

---

## 🌐 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | [mbilalhussain-talentra-ip.vercel.app](https://mbilalhussain-talentra-ip.vercel.app) |
| Backend | Render | [talentra-interviewer-platform.onrender.com](https://talentra-interviewer-platform.onrender.com) |

---

## 📄 License

MIT License © 2026 [Muhammad Bilal Hussain](https://github.com/mbilalhussain15)

---

<p align="center">Built with ❤️ by <a href="https://github.com/mbilalhussain15">Muhammad Bilal Hussain</a></p>
