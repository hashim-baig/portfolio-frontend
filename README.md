# Developer Website - Frontend

This is the frontend codebase for my personal **Developer Website** project, featuring a digital resume, services offered, and a blog.

Built with **React.js**, styled for responsiveness and performance.

---

## 🛠 Tech Stack
- React.js
- HTML5, CSS3
- JavaScript (ES6+)
- Docker (for containerization)
- CI/CD (for automation)

---

## 🚀 Project Setup

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
The app will be available at `http://localhost:5173/` (if using Vite) or `http://localhost:3000/` (Create React App).

---

## 🐳 Docker Commands

### Build Docker Image
```bash
docker build -t dev-website-frontend .
```

### Run Docker Container
```bash
docker run -p 3000:3000 dev-website-frontend
```

---

## 📄 Project Structure
```
/src
  /components
  /pages
  /services
  /assets
App.jsx
index.js
```

---

## 📚 License
This project is for personal learning and portfolio purposes.
```

---

# 📄 Backend (`dev-website-backend`) README

```markdown
# Developer Website - Backend

This is the backend codebase for my personal **Developer Website** project, providing API services for digital resume, services, and blog management.

Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- Docker (for containerization)
- CI/CD (for deployment)

---

## 🚀 Project Setup

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
The server will start on `http://localhost:5000/`.

---

## 📦 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

---

## 🐳 Docker Commands

### Build Docker Image
```bash
docker build -t dev-website-backend .
```

### Run Docker Container
```bash
docker run -p 5000:5000 dev-website-backend
```

---

## 📄 Project Structure
```
/routes
/controllers
/models
/config
server.js
```

---

## 📚 License
This project is for personal learning and portfolio purposes.
```

