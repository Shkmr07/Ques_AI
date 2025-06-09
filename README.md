# QuesAI 🎙️

QuesAI is a full-stack application that enables users to register, log in, and manage their projects and episodes. This README covers the backend API built using Node.js, Express, MongoDB, and JWT authentication.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Postman or Thunder Client

---

## 📁 API Route Structure

```
/api
├── /user      → Handles authentication
├── /project   → Manages projects
└── /episode   → Manages episodes
```

---

## 📌 API Endpoints

### 👤 User Routes

| Method | Endpoint        | Description          | Auth Required |
|--------|------------------|----------------------|----------------|
| POST   | /user/signup     | Register new user    | ❌             |
| POST   | /user/login      | Login user           | ❌             |
| POST   | /user/logout     | Logout user          | ✅             |

---

### 📁 Project Routes

| Method | Endpoint             | Description           | Auth Required |
|--------|----------------------|-----------------------|---------------|
| POST   | /project/add-project | Create a new project  | ✅             |
| GET    | /project/            | Get all user projects | ✅             |

---

### 🎬 Episode Routes

| Method | Endpoint                | Description          | Auth Required |
|--------|-------------------------|----------------------|---------------|
| GET    | /episode/               | Get all episodes     | ✅             |
| POST   | /episode/create         | Create an episode    | ✅             |
| PATCH  | /episode/edit/:id       | Edit an episode      | ✅             |
| DELETE | /episode/delete/:id     | Delete an episode    | ✅             |

---

## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/quesai.git
cd quesai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Development Server

```bash
npm run dev
```

Your server will run on: `http://localhost:5000`

---

## 🔐 Auth Headers

For all protected routes, send the JWT token in the `Authorization` header:

```
Authorization: Bearer <your_token_here>
```

---

## 📦 Example JSON for Project Creation

```json
{
  "name": "Sample Project"
}
```

---

## 📦 Example JSON for Episode Creation

```json
{
  "title": "Episode 1",
  "description": "Introduction to QuesAI",
  "projectId": "your_project_id"
}
```

---

## 🧼 License

MIT License © 2025 Ayush Kumar Singh
