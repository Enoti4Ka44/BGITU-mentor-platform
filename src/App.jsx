import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Welcome from "./pages/welcome/Welcome";
import StudentHome from "./pages/StudentPage/studentHome/StudentHome";
import MentorHome from "./pages/mentorPage/mentorHome/MentorHome";
import MentorProfile from "./pages/mentorPage/mentorProfile/MentorProfile";
import AllMentors from "./pages/StudentPage/allMentors/AllMentors";
import AllArticles from "./pages/articles/AllArticles";
import StudentProfile from "./pages/StudentPage/studentProfile/studentProfile";
import PostArticle from "./pages/mentorPage/postArticle/PostArticle";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles" element={<AllArticles />} />

          <Route
            path="/mentor-home"
            element={
              <ProtectedRoute roles={["ROLE_MENTOR"]}>
                <MentorHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentor-profile"
            element={
              <ProtectedRoute roles={["ROLE_MENTOR"]}>
                <MentorProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mentor-post-article"
            element={
              <ProtectedRoute roles={["ROLE_MENTOR"]}>
                <PostArticle />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-home"
            element={
              <ProtectedRoute roles={["ROLE_STUDENT"]}>
                <StudentHome />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-profile"
            element={
              <ProtectedRoute roles={["ROLE_STUDENT"]}>
                <StudentProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/all-mentors"
            element={
              <ProtectedRoute roles={["ROLE_STUDENT"]}>
                <AllMentors />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>

      <ToastContainer
        limit={3}
        position="bottom-right"
        theme="colored"
        closeOnClick
      />
    </>
  );
}

export default App;
