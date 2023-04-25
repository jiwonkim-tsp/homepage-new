import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { colors } from "@/styles/color";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <style jsx global>{`
        body {
          background-color: ${colors.beige};
        }
      `}</style>
    </>
  );
};

export default Layout;
