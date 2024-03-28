import styles from "./blugPage.module.css";
import PostCard from "@/components/postCard/PostCard";

export default function BlugPage({ params, searchParams }) {
  console.log(params, searchParams);

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}
