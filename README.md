# 📋 Task Tracker

A **full-stack** task management application built with **React (frontend)** and **Express + MongoDB (backend)**.  
Manage tasks easily with a clean UI and secure authentication.

---

## ✨ Features

- 🔐 **User Authentication** – Signup & Login  
- 📝 **Task Management** – Add, complete, and delete tasks  
- 📱 **Responsive UI** – Works on mobile & desktop  
- 🌐 **RESTful API** – Clean backend routes  

---

## 📂 Project Structure

```
backend/
  .env
  package.json
  server.js
  controllers/
    authController.js
    taskController.js
  middleware/
    authMiddleware.js
  models/
    Task.js
    User.js
  routes/
    authRoutes.js
    taskRoutes.js

frontend/
  .gitignore
  package.json
  README.md
  build/
    ...
  public/
    ...
  src/
    App.css
    App.js
    ...
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js**
- **npm**
- **MongoDB** (Atlas or local)

---

### 🖥 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file and configure:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   ```
4. Start backend server:
   ```bash
   npm run dev
   ```
   Backend runs on: **http://localhost:5001**

---

### 💻 Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start frontend app:
   ```bash
   npm start
   ```
   Frontend runs on: **http://localhost:3000**

---

## 🔗 API Endpoints

- `POST /api/auth/signup` — 📥 Register a new user  
- `POST /api/auth/login` — 🔑 Login  
- `GET /api/tasks` — 📋 Get all tasks  
- `POST /api/tasks` — ➕ Add a task  
- `PUT /api/tasks/:id` — ✏️ Update a task  
- `DELETE /api/tasks/:id` — 🗑 Delete a task  

---

## 🛠 Technologies Used

**Frontend:** React, Axios, React Router  
**Backend:** Express, Mongoose, MongoDB, bcryptjs  
**Dev Tools:** Nodemon  

---

## 📜 License

This project is licensed under the **MIT License**.

---

