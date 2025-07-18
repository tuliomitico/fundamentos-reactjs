import { Comment } from "./Comment";
import styles from "./Post.module.css";

/**
 * @typedef {Object} Props
 * @prop {string} author
 * @prop {string} content
 */

/**
 *
 * @param {Props} props
 * @returns {import("react").JSX.Element}
 */
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/tuliomitico.png"
          />
          <div className={styles.authorInfo}>
            <strong>Túlio Mítico</strong>
            <span>Fullstack Engineer</span>
          </div>
        </div>
        <time title="15 de Julho às 14:49" datetime="2025-07-15 14:49:01">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
