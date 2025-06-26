import styles from "./MentorStudents.module.scss";
import Layout from "../../../components/layout/Layout";
import StudentCard from "../components/studentCard/StudentCard";
import { mentorAPI, mentorshipAPI } from "../../../services";
import { useState, useEffect } from "react";

function MentorStudents() {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorAPI.getMentorStudents();
        setStudentsData(data);
      } catch (error) {
        console.log("Ошибка при загрузке данных", error);
      }
    };
    fetchData();
  }, []);

  const handleReject = async (studentId) => {
    try {
      const response = await mentorshipAPI.postMentorReject(studentId);
      toast.success("Вы отказались от студента");
      setStudentsData((prevStudents) =>
        prevStudents.filter((student) => student.id !== studentId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h2>Мои студенты</h2>
      <div className={styles.myStudentsCards}>
        {studentsData.length > 0 ? (
          studentsData
            .slice(0, 3)
            .map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onClick={handleReject}
              />
            ))
        ) : (
          <p style={{ fontWeight: "500", fontSize: "28px" }}>
            Студенты не найдены
          </p>
        )}
      </div>
    </Layout>
  );
}

export default MentorStudents;
