import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger , bolder , braver and better
            .
          </h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger , bolder , braver and better
            . We create digital ideas that are bigger , bolder , braver and
            better .We create digital ideas that are bigger , bolder , braver
            and better .
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/flower2.png"
            alt="about page"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
