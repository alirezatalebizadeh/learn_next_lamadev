import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/flower2.png" className={styles.img} alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name and SurName"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Email Address"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Phone Number (optional)"
          />
          <textarea name="" id="" placeholder="Message"></textarea>
        </form>
      </div>
    </div>
  );
}
