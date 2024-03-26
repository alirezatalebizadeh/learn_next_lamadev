import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2 className="font-bold">not-found</h2>
      <p>Sorry, the page you are lokking for does not exist</p>
      <Link href="/">Home page</Link>
    </>
  );
}
