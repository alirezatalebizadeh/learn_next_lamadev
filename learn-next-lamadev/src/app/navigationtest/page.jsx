"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// ! learn navigation
export default function NavigationText() {
  //! Client Side Navigation
  const router = useRouter();
  const pathName = usePathname();
  const searchParsm = useSearchParams();
  const q = searchParsm.get("q");
  const p = searchParsm.get("price");
  const c = searchParsm.get("count");
  // console.log(pathName);
  console.log(q, p, c);

  const clickHandler = () => {
    console.log("clicked");

    // router.replace("/");
    router.back();
    // router.forward();
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
