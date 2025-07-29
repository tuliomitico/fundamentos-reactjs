import React, { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}
interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType
}
/**
 * @param {import("../App.jsx").Post} props
 * @returns {import("react").JSX.Element}
 */
export function Post({ post: { author, content, publishedAt } }: PostProps): React.JSX.Element {
  const [comments, setComments] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  /**
   *
   * @param {import("react").FormEvent} event
   */
  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments((prevState) => prevState.concat(newCommentText));
    setNewCommentText("");
  }

  /**
   * Sets a custom validity message for the comment input when it is invalid.
   *
   * @param {import("react").InvalidEvent<HTMLTextAreaElement>} event - The invalid event triggered by the textarea.
   */

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  /**
   *
   * @param {import("react").ChangeEvent<HTMLTextAreaElement>} e
   */
  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  /**
   *
   * @param {string} commentToDelete
   */
  function deleteComment(commentToDelete: string) {
    const commentWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete,
    );
    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
