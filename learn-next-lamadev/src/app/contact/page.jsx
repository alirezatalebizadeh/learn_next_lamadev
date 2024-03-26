import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/flower2.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.formContainer}>
          <input type="text" className={styles.input} placeholder="" />
        </form>
      </div>
    </div>
  );
}
