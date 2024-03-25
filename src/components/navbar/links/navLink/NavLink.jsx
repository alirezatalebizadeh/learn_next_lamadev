"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

export default function Navlink({ item }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={item.page}
      className={`${styles.container} ${
        pathName === item.page && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}
