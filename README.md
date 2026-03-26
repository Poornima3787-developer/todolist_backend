# Backend Documentation

## 📌 Overview
This backend provides RESTful APIs for a Todo application with authentication. It supports user registration, login, and task management with subtasks.

The system uses JWT (JSON Web Token) for secure authentication and using bcrypt for password hashing.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt (for password hashing)

---

## 📁 Folder Structure

backend/
 ├── models/
 │    ├── user.js
 │    └── todo.js
 ├── routes/
 │    ├── auth.js
 │    └── todo.js
 ├── middleware/
 │    └── authMiddleware.js
 ├── server.js

## 🔐 Authentication (JWT)

1.User registers
2.Password is hashed using bcrypt
3.User logs in
4.Server verifies credentials
5.JWT token is generated
6.Token is sent to frontend
7.Frontend stores token
8.Token is required for protected routes

## User APIs

POST /signup
POST /login

## Todo APIs

GET /todos
POST /todos
PUT /todos/:id
DELETE /todos/:id

## SubTasks APIs

POST /todos/:id/subtask
PUT /todos/:id/subtask/:subId
DELETE /todos/:id/subtask/:subId

## DATABASE SCHEMA

Collections

1.User - Stores user information
2.Todos - Stores tasks and subtasks

## Relationships

One user -> Many Todos
One Todo -> Many Subtasks


## ⚠️ Error Handling
Invalid token → 401 Unauthorized
Server error → 500 Internal Server Error
Invalid data → 400 Bad Request

## 🔓 Enable CORS (Important)
CORS(cross-origin resource sharing) will enable us to use frontend

const cors = require("cors");
app.use(cors());

## 🚀  Features

User Signup & Login
JWT Authentication
Password Hashing
Protected Routes
Todo CRUD Operations
Subtask Management


## ▶️ Run Backend

npm install
npm start
or
node server.js

## Server runs on http://192.168.0.197:3000
