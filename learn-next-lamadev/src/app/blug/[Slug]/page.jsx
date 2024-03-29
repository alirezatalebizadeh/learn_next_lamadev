import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";

// ! FETCH DATA WITH API
const getData = async (Slug) => {
  //! این دیتا هر 1 ساعت یک بار اپدیت میشود
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${Slug}`,{cache:"no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default async function SinglePostPage({ params }) {
  const { Slug } = params;
  const post = await getData(Slug);

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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/flower2.png"
            width={50}
            height={50}
            className={styles.avatar}
            alt="single image"
          />
          <Suspense fallback={<div>loading ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}
