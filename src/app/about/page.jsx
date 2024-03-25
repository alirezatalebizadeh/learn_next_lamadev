import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/flower2.png" className={`object-cover`} alt="about" fill />
      </div>
    </div>
  );
}
