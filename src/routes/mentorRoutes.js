import MentorHome from "../pages/mentorPage/mentorHome/MentorHome";
import MentorProfile from "../pages/mentorPage/mentorProfile/MentorProfile";
import PostArticle from "../pages/mentorPage/postArticle/PostArticle";
import MentorArticles from "../pages/mentorPage/myArticles/MentorArticles";
import MentorRequests from "../pages/mentorPage/mentorRequests/MentorRequests";
import MentorStudents from "../pages/mentorPage/mentorStudents/MentorStudents";

const mentorRoutes = [
  { path: "/mentor-home", element: <MentorHome /> },
  { path: "/mentor-profile", element: <MentorProfile /> },
  { path: "/mentor-post-article", element: <PostArticle /> },
  { path: "/mentor-articles", element: <MentorArticles /> },
  { path: "/mentor-pending-requests", element: <MentorRequests /> },
  { path: "/mentor-students", element: <MentorStudents /> },
];

export default mentorRoutes;
