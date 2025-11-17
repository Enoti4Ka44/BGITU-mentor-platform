# 🧩 BGITU Mentor App

A web platform designed to connect students with experienced mentors who help them navigate job searching, improve their skills, and grow professionally.  
Mentors have individual ratings, can publish articles, and students can easily browse, filter, and choose a suitable mentor.

---

## 💻 Core Functionality

* **Authentication & Authorization UI**
  * User-friendly registration and login forms with validation.
  * Integration with backend JWT authentication.
  * Role-Based Access Control (MENTOR and STUDENT).

* **User Profiles**
  * Profile pages with editable personal information.
  * Avatar upload preview and UI handling.
  * Different profile views depending on the user role.

* **Mentor Catalog**
  * Search by keywords.
  * Filtering by specialization.
  * Sorting options (e.g., top-rated mentors).
  * Pagination with smooth navigation.
  * Displaying mentor ratings and vote interactions.

* **Articles**
  * UI for mentors to create, edit, and manage articles.
  * Public article catalog with search and category filtering.
  * Voting system for rating articles.

* **Mentorship System**
  * Students can send mentorship requests directly from the mentor’s profile.
  * UI for mentors to approve or decline incoming requests.
  * Dashboard to manage active mentor–student connections.

---

## 🚀 Tech Stack

**Frontend:**
- ReactJS  
- SCSS  
- Vite (build tool)  
- React Router (client-side routing)

---

## 🛠️ Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/Enoti4Ka44/bgitu-mentor-app.git
```

**2. Go to the project folder**

```bash
cd bgitu-mentor-app
```

**3. Install dependencies**

Make sure you have **Node.js** (version 18+ recommended).

```bash
npm install
```

**4. Create an environment file**

Create a file called **`.env`** in the project root and add your backend URL:

```
VITE_API_BASE_URL=http://your-backend-url/api
```

(Replace the URL with your actual backend address.)

**5. Start the development server**

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

**6. Build for production**

```bash
npm run build
```

**7. Preview the production build**

```bash
npm run preview
```
