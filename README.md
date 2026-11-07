# Interndom Backend Development Internship

This repository contains the backend projects built during the **Interndom Backend Development Internship**.

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Cloud)
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** Bcrypt.js (Password Hashing)
- **Environment Management:** Dotenv

---

## 🔐 Task 2: Signup & Login with JWT Authentication

### Features Implemented:
- User registration with **Bcrypt password hashing**
- User login with credential validation & **JWT token generation**
- Reusable **Auth Middleware** verifying Bearer tokens
- **Protected `/profile` route** returning authenticated user data
- Clear error handling for `User already exists`, `Invalid credentials`, and `Unauthorized access`

### Endpoints Table:
| Method | Endpoint | Description | Auth Required | Status Code |
|---|---|---|---|---|
| **POST** | `/signup` | Register a new user | No | `201 Created` / `400 Bad Request` |
| **POST** | `/login` | Authenticate user & get JWT | No | `200 OK` / `400 Bad Request` |
| **GET** | `/profile` | Get logged-in user profile | **Yes (Bearer Token)** | `200 OK` / `401 Unauthorized` |

---

## 📝 Task 1: Simple CRUD REST API

### Features Implemented:
- Full CRUD operations on Task entity (`title`, `description`, `status`)
- Input validation & MongoDB Object ID validation
- Standard HTTP status codes (`200`, `201`, `400`, `404`, `500`)

### Endpoints Table:
| Method | Endpoint | Description | Status Code |
|---|---|---|---|
| **POST** | `/tasks` | Create a new task | `201 Created` / `400 Bad Request` |
| **GET** | `/tasks` | Get all tasks | `200 OK` |
| **GET** | `/tasks/:id` | Get single task by ID | `200 OK` / `404 Not Found` |
| **PUT** | `/tasks/:id` | Update task by ID | `200 OK` / `404 Not Found` |
| **DELETE** | `/tasks/:id` | Delete task by ID | `200 OK` / `404 Not Found` |

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asadranax20-create/interndom-task1-crud-api.git
   cd interndom-task1-crud-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```