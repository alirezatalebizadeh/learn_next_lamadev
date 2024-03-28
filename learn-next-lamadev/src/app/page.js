import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency,</h1>
        <p className={styles.desc}>
          Lorem imsum lorem ipsom colred red Lorem imsum lorem ipsom colred red
          Lorem imsum lorem ipsom colred red .
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/flower2.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/flower2.png" fill alt="" className={styles.heroImg} />
      </div>
    </div>
  );
}
