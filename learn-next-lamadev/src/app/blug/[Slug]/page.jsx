import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/flower2.png"
          alt="single post image"
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}></h1>
        <div className={styles.detail}>
          <Image
            src="/flower2.png"
            width={50}
            height={50}
            className={styles.avatar}
            alt="single image"
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          cupiditate quos! Nesciunt voluptas, autem eveniet quod sit est
          voluptatum dolor?
        </div>
      </div>
    </div>
  );
}
