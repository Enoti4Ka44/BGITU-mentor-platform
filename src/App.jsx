import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Welcome from "./pages/welcome/Welcome";
import AllArticles from "./pages/articles/AllArticles";

import mentorRoutes from "./routes/mentorRoutes";
import studentRoutes from "./routes/studentRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Публичные */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles" element={<AllArticles />} />

          {/* Для роли MENTOR */}
          {mentorRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute roles={["MENTOR"]}>{element}</ProtectedRoute>
              }
            />
          ))}

          {/* Для роли STUDENT */}
          {studentRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute roles={["STUDENT"]}>{element}</ProtectedRoute>
              }
            />
          ))}
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
