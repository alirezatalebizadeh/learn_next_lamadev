"use client";
import Navlink from "./navLink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";

export default function Links() {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "Home", page: "/" },
    { title: "About", page: "/about" },
    { title: "Contact", page: "/contact" },
    { title: "Blug", page: "/blug" },
  ];

  // !Temprary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((item) => (
          <Navlink key={item.title} item={item} />
        ))}
        {session ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", page: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Navlink item={{ title: "Login", page: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((item) => (
            <Navlink key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
