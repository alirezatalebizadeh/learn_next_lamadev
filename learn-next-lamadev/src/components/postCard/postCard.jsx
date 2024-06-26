import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function postCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image alt="" src="/flower2.png" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blug/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
