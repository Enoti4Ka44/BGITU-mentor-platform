import StudentHome from "../pages/StudentPage/studentHome/StudentHome";
import StudentProfile from "../pages/StudentPage/studentProfile/studentProfile";
import AllMentors from "../pages/StudentPage/allMentors/AllMentors";

const studentRoutes = [
  { path: "/student-home", element: <StudentHome /> },
  { path: "/student-profile", element: <StudentProfile /> },
  { path: "/all-mentors", element: <AllMentors /> },
];

export default studentRoutes;
