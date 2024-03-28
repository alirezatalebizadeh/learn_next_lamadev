"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

// ! learn navigation
export default function NavigationText() {
  //! Client Side Navigation
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  const s = searchParams.get("sort");
  const p = searchParams.get("price");

  console.log(q, s, p);

  const clickHandler = () => {
    console.log("clicked");

    // router.push("/");
    // router.replace("/");
    // router.back();
    router.forward();
  };

  return (
    <div className="flex flex-col justify-start">
      <Link href="/" prefetch={false}>
        Click me
      </Link>
      <button onClick={clickHandler}>click and write</button>
    </div>
  );
}
