import React from "react";
import "./../styles/resetStyle.css";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <style jsx global>{``}</style> */}
    </Layout>
  );
};

export default App;
