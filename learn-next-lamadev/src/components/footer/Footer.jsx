import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamaDev</div>
      <div className={styles.text}>
        lama creative thoughts agency * all rights reserved
      </div>
    </div>
  );
}
