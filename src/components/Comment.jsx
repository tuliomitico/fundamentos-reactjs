import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

/**
 *
 * @param {Record<string, string>} props
 * @returns {import("react").JSX.Element}
 */
export function Comment({ content }) {
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
            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
