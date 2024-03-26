import Image from "next/image";
import styles from "./contact.module.css";
// import HydrationTest from "@/components/hydrationTest";
import dynamic from "next/dynamic";

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/flower2.png" className={styles.img} alt="" fill />
      </div>

      <div className={styles.formContainer}>
        <HydrationTestNoSSR />
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
