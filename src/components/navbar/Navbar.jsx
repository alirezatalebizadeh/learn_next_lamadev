import React from "react";
import Links from "./links/links";
import styles from "./navbar.module.css";



export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </div>
  );
}
