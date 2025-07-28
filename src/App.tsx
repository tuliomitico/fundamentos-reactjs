import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

export interface Post {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: "paragraph" | "link";
    content: string;
  }[];
  publishedAt: Date;
}
/**
 * @typedef {Object} Post
 * @prop {number} id
 * @prop {Object} author
 * @prop {string} author.avatarUrl
 * @prop {string} author.name
 * @prop {string} author.role
 * @prop {{ type: "paragraph" | "link", content: string}[]} content
 * @prop {Date} publishedAt
 */

/**
 * @constant
 * @type {Post[]}
 */
const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tuliomitico.png",
      name: "Túlio de Freitas",
      role: "Fullstack Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-07-15 14:49:01"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/albertveiga.png",
      name: "Albert Veiga",
      role: "Severino",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-07-22 11:51:35"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
