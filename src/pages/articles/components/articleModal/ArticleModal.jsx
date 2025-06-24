import styles from "./ArticleModal.module.scss";
import Button from "../../../../components/ui/button/Button";
import Vote from "../../../../components/ui/vote/Vote";
import { voteAPI } from "../../../../services";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "../../../../components/layout/modal/Modal";

function ArticleModal({ article, onClose }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [vote, setVote] = useState("");

  const handleVote = async (upvote) => {
    try {
      const sentVote = await voteAPI.postArticleVote(article.id, upvote);
      toast.success("Ваш голос учтен");
    } catch (error) {
      toast.error(`${error}`);
      console.error("Ошибка при голосовании:", error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalArticle}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalName}>{article.title}</h3>
          <div className={styles.imgWrapper}>
            {article.imageUrl && <img src={article.imageUrl} alt="" />}
          </div>
          <p className={styles.modalDescription}>{article.content}</p>
        </div>

        <div className={styles.modalFooter}>
          <p className={styles.modalArticleInfo}>
            {article.authorFullName} <span>{article.specialityName}</span>
          </p>
          <div className={styles.vote}>
            <Vote onClick={handleVote} id={article.id}>
              {article.rank}
            </Vote>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ArticleModal;
