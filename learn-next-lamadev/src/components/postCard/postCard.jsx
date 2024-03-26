import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function postCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image alt="" src="/flower2.png" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rerum, ullam. Sapiente aut assumenda nam odio tempora debitis incidunt
          nisi minus.
        </p>
        <Link className={styles.link} href="/blug/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}
