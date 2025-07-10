# WebWave 🎥💬

**WebWave** is a full-stack Zoom-inspired web-based video calling application with real-time chat, built with WebRTC, Socket.IO, Express.js, and MongoDB. It enables peer-to-peer video/audio communication, screen sharing, and room-based chat with session history tracking.

## 🚀 Features

- 🎥 Real-time Video & Audio Calls (WebRTC)
- 💬 Chat Room with live messaging
- 🖥️ Screen Sharing
- 🧑‍🤝‍🧑 Multi-user support with dynamic room joining
- 🔐 Authentication System (Register/Login)
- 📜 User Activity History with MongoDB
- 🟢 Socket-based real-time presence
- ✨ Beautiful UI using MUI and React

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Socket.IO-client
- MUI (Material UI)

**Backend:**
- Node.js + Express.js
- Socket.IO-server
- MongoDB + Mongoose

## 🧠 Architecture

- **Client Side:** Initializes media stream and connects to a signaling server (via Socket.IO).
- **Server Side:** Handles room management, signaling logic (SDP & ICE candidates), and chat message broadcasting.
- **MongoDB:** Stores user accounts and meeting history via secure tokens.

## 📂 Project Structure

WebWave/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── app.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   └── styles/
│   ├── public/
│   └── .env


## 🌐 Environment Setup

### Backend `.env`
MONGO_URI=your-mongodb-url
PORT=8000


### Frontend `.env` (Optional)
REACT_APP_BACKEND_URL=http://localhost:8000


## 🧪 Running Locally

1. **Clone the repo**  
   `git clone https://github.com/bsce24032/WebWave`

2. **Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   cd frontend
   npm install
   npm start

Open in browser: http://localhost:3000

🔒 Authentication
	•	JWT-like token system using crypto
	•	Persistent login with localStorage
	•	User-specific activity history

⚙️ Deployment
	•	Frontend: Render
	•	Backend: Deploy to Render
	•	MongoDB: Use MongoDB Atlas (already integrated)

📖 Future Improvements
	•	Password hashing with JWT session tokens
	•	Media controls overlay & UI polishing
	•	MCU (Multipoint Control Unit) for centralized stream mixing
	•	Screen recording & snapshot
	•	Mobile responsiveness


💡 Inspiration

Inspired by modern video conferencing apps like Zoom, Google Meet, and Jitsi Meet, WebWave aims to bring a clean, understandable, and scalable solution for real-time collaboration.


🙌 Author

Made with ❤️ by Shahmeer Faisal




For contributions, issues, or feedback, feel free to open a pull request or issue!
---















