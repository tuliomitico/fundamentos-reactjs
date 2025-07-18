import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Túlio"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eligendi veritatis doloribus deleniti laboriosam maiores est sequi aperiam omnis. Molestias ipsum reiciendis officiis error quae mollitia accusamus fuga sequi dolores."
          />
          <Post author="Fulano de tal" content="Um post muito legal" />
        </main>
      </div>
    </div>
  );
}
