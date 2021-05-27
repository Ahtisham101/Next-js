import React from "react";
import Layout from "../components/Layout";

export default function Myapp({ Component, pageProps }) {
  //   console.log(pageProps);
  //   console.log(Component);
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
  s;
}
