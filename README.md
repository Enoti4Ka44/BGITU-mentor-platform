# 🧩 BGITU Mentor App

A web platform designed to connect students with experienced mentors who help them navigate job searching, improve their skills, and grow professionally.  
Mentors have individual ratings, can publish articles, and students can easily browse, filter, and choose a suitable mentor.

<img width="684" height="710" alt="image" src="https://github.com/user-attachments/assets/24057993-f229-4666-b0b4-65f4de0001f5" />


---

## 💻 Core Functionality

* **Authentication & Authorization UI**
  * User-friendly registration and login forms with validation.
  * Integration with backend JWT authentication.
  * Role-Based Access Control (MENTOR and STUDENT).

<img width="960" height="586" alt="image" src="https://github.com/user-attachments/assets/797128c1-790a-4174-80c4-0f388d437339" />

---

* **User Profiles**
  * Profile pages with editable personal information.
  * Avatar upload preview and UI handling.
  * Different profile views depending on the user role.

<img width="1912" height="970" alt="msedge_fHtzmint6A" src="https://github.com/user-attachments/assets/f3444b2f-35a1-4e61-8aba-375be9f897a2" />

---

* **Mentor Catalog**
  * Search by keywords.
  * Filtering by specialization.
  * Sorting options (e.g., top-rated mentors).
  * Pagination with smooth navigation.
  * Displaying mentor ratings and vote interactions.

<img width="1912" height="970" alt="msedge_HHV2HLBonK" src="https://github.com/user-attachments/assets/cb32396f-ce78-45de-878e-52e3f5cbb465" />

---

* **Articles**
  * UI for mentors to create, edit, and manage articles.
  * Public article catalog with search and category filtering.
  * Voting system for rating articles.

<img width="1912" height="970" alt="msedge_Dvmf5sBVNU" src="https://github.com/user-attachments/assets/4736b8e0-2b16-458b-9e91-3657b650d787" />

---

* **Mentorship System**
  * Students can send mentorship requests directly from the mentor’s profile.
  * UI for mentors to approve or decline incoming requests.
  * Dashboard to manage active mentor–student connections.

<img width="1912" height="970" alt="msedge_THUr6IYPyW" src="https://github.com/user-attachments/assets/652c8f49-014f-4e82-b61f-a7868d58ecbc" />

---

## 🚀 Tech Stack

**Frontend:**
- ReactJS ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
- SCSS ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)  
- Vite (build tool) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  
- React Router (client-side routing) 	![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

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
> [!NOTE]
> The port of the application may differ from the one shown in this example. It depends on your local environment and which ports are already in use.

**6. Build for production**

```bash
npm run build
```

**7. Preview the production build**

```bash
npm run preview
```
