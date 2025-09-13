import styles from "./ArticleModal.module.scss";
import Vote from "../../../../components/ui/vote/Vote";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import { voteAPI, articlesAPI } from "../../../../services";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "../../../../components/layout/modal/Modal";
import Button from "../../../../components/ui/button/Button";

function ArticleModal({ article, onClose, button, onDelete }) {
  const [rank, setRank] = useState(article.rank);

  const handleVote = async (upvote) => {
    try {
      const response = await voteAPI.postArticleVote(article.id, upvote);
      if (response.rank !== undefined) {
        setRank(response.rank);
      }
      toast.success("Ваш голос учтён");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    try {
      const response = await articlesAPI.deleteArticleById(articleId);
      toast.success("Статья успешно удалена");
      onDelete(articleId);
    } catch (error) {
      console.error(error);
    }
  };

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
            <Vote onClick={handleVote}>{rank}</Vote>
          </div>
        </div>
        {button && (
          <div className={styles.btnWrapper}>
            <Button onClick={() => handleDeleteArticle(article.id)} color="red">
              Удалить
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ArticleModal;
