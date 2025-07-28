import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

/**
 * @typedef {Object} CommentProps
 * @prop {string} content
 * @prop {(comment: string) => void} onDeleteComment
 */

/**
 * @param {CommentProps} props
 * @returns {import("react").JSX.Element}
 */
export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  /**
   * @returns {void}
   */
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  /**
   * Handles the event of liking a comment. Increments the like count by one.
   * @returns {void}
   */
  function handleLikeComment() {
    setLikeCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/tuliomitico.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Túlio de Freitas</strong>
              <time title="15 de Julho às 14:49" dateTime="2025-07-15 14:49:01">
                Cerca de uma 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              type="button"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
