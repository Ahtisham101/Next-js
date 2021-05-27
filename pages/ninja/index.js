import React from "react";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // console.log(data);
  return {
    props: { ninja: data },
  };
};

export default function ninja({ ninja }) {
  return (
    <div>
      <h1>ninja</h1>
      {ninja.map((ninjas) => {
        return (
          <Link key={ninja.id} href={"/ninja/" + ninja.id} key={ninjas.id}>
            <h3>{ninjas.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}
