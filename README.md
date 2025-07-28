# Kambaz LMS 🧑‍🏫

**Kambaz** is a web-based Learning Management System (LMS) developed as part of the Web Development course at Northeastern University. Built using the **MERN stack (MongoDB, Express, React, Node.js)**, Kambaz provides a responsive, dynamic, and interactive single-page application that allows users to manage courses, assignments, profiles, and grades.

This project mirrors real-world LMS systems like Canvas, serving as a full-stack educational exercise designed by Dr. Jose Annunziato.

---

## 🔧 Tech Stack

- **Frontend:** React + TypeScript + Vite  
- **State Management:** useState, useEffect, and Redux  
- **Styling:** CSS, Bootstrap, React-Bootstrap, and React Icons  
- **Routing:** React Router DOM  
- **Backend:** Node.js with Express  
- **Database:** MongoDB (Local & Atlas Cloud)  

---

## 📦 Features

### 👤 Account Management
- Sign In / Sign Up  
- Profile Edit / Save  
- Role-based views (Student, Faculty, Admin)

### 📚 Course Management
- Dashboard with enrolled/teaching courses  
- Add / Edit / Delete Courses  
- View Course Details

### 📂 Module & Assignment Tracking
- Add modules and lessons  
- Create and manage assignments  
- Grade input and updates

### 📝 Quiz System
- Create and edit quizzes per course  
- Add questions with multiple choice or short answers  
- Take quizzes and submit responses  
- View quiz attempts and results (for students and faculty)

### 🧭 SPA Navigation
- HashRouter-based routing  
- Navigation sidebar and breadcrumbs  
- Responsive layout with reusable components


---

## 🚀 Live Demo

You can access the deployed version of the project here:  
🔗 [https://finalproject-kambaz.netlify.app](https://finalproject-kambaz.netlify.app)

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- VS Code or any IDE

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/kambaz-lms.git
cd kambaz-lms
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Frontend

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the React app running.

### 4. Start the Backend (in `/api` folder)

```bash
cd api
npm install
npm run start
```

Make sure MongoDB is running locally or set up your **MongoDB Atlas URI** in a `.env` file.

---

## 📜 License

MIT License — for educational purposes only.
