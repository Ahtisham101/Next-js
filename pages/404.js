import Link from "next/link";

export default function PageNotFound() {
  return (
    <div>
      <h1>oooops... </h1>
      <h1>page not be found</h1>
      <p>
        Go back to the
        <Link href="/">
          <a>HomePage</a>
        </Link>
      </p>
    </div>
  );
}
