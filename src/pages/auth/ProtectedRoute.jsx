import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/welcome" replace />;
  }

  if (roles && !roles.includes(role)) {
    switch (role) {
      case "ROLE_MENTOR":
        return <Navigate to="/mentorHome" replace />;
      case "ROLE_STUDENT":
        return <Navigate to="/studentHome" replace />;
      default:
        return <Navigate to="/welcome" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
