import styles from "./blugPage.module.css";
import PostCard from "@/components/postCard/PostCard";

// ! Fetch data with api
const getData = async () => {
  //! این دیتا هر 1 ساعت یک بار اپدیت میشود
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default async function BlugPage() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
