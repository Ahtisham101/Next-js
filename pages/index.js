import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed excepturi
        possimus saepe suscipit rem quaerat libero nihil error ex ab eum totam
        optio, obcaecati autem recusandae aliquid quod. Explicabo, at?
      </p>
      <Link href="/ninja/test">
        <a>ninjas</a>
      </Link>
    </div>
  );
}
