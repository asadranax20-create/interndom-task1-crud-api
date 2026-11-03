# Task 1: Simple CRUD REST API

Built as part of the **Interndom Backend Development Internship**.

## 🚀 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas & Mongoose**
- **Dotenv**

---

## 📌 Features & API Endpoints

| Method | Endpoint | Description | Status Code |
|---|---|---|---|
| **POST** | `/tasks` | Create a new task | `201 Created` / `400 Bad Request` |
| **GET** | `/tasks` | Get all tasks | `200 OK` |
| **GET** | `/tasks/:id` | Get single task by ID | `200 OK` / `404 Not Found` |
| **PUT** | `/tasks/:id` | Update task by ID | `200 OK` / `404 Not Found` |
| **DELETE** | `/tasks/:id` | Delete task by ID | `200 OK` / `404 Not Found` |

---

## 🛠️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd task1-crud-api