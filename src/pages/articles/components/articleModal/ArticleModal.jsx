import styles from "./ArticleModal.module.scss";
import Vote from "../../../../components/ui/vote/Vote";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import { voteAPI } from "../../../../services";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "../../../../components/layout/modal/Modal";

function ArticleModal({ article, onClose }) {
  const [activeVote, setActiveVote] = useState(null);
  const [rank, setRank] = useState(article.rank);

  const handleVote = async (upvote) => {
    try {
      const response = await voteAPI.postArticleVote(article.id, upvote);
      toast.success("Ваш голос учтён");

      return response.rank;
    } catch (error) {
      console.error(error);
    }
  };

  console.log(article.imageUrl);

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalArticle}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalName}>{article.title}</h3>
          {article.imageUrl && (
            <div className={styles.imgWrapper}>
              <ImageWrapper imageUrl={article.imageUrl} />
            </div>
          )}
          <p className={styles.modalDescription}>{article.content}</p>
        </div>

        <div className={styles.modalFooter}>
          <p className={styles.modalArticleInfo}>
            {article.authorFullName} <span>{article.specialityName}</span>
          </p>
          <div className={styles.vote}>
            <Vote onClick={handleVote} value={rank} setValue={setRank} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ArticleModal;
