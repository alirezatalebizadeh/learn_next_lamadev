import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";

// import HydrationTest from "@/components/hydrationTest";
//! dynamic import without server side rendering
// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });

export default function ContactPage() {
  // const a = Math.random();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/flower2.png" className={styles.img} alt="" fill />
      </div>

      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
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
