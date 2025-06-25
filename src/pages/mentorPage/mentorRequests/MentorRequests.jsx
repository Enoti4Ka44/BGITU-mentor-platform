import styles from "./MentorRequests.module.scss";
import Layout from "../../../components/layout/Layout";
import { mentorshipAPI } from "../../../services";
import { useState, useEffect } from "react";
import RequestCard from "./components/requestCard/RequestCard";

function MentorRequests() {
  const [requestData, setRequestData] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorshipAPI.getApplications();
        setRequestData(data);

        if (data.avatarUrl) {
          setAvatarUrl(data.avatarUrl);
        }
      } catch (error) {
        console.log("Ошибка при загрузке данных", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h2>Входящие заявки</h2>
      <div className={styles.requests}>
        {requestData.map((req) => (
          <RequestCard key={req.id} request={req} />
        ))}
      </div>
    </Layout>
  );
}

export default MentorRequests;
