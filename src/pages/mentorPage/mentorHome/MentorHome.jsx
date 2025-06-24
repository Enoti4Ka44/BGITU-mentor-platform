import { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";

function MentorHome() {
  const [popularMentors, setPopularMentors] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [studentMentor, setStudentMentor] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  return (
    <Layout>
      <h2>Главная</h2>
    </Layout>
  );
}

export default MentorHome;
