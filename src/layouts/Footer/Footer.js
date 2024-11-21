import React from "react";
import Newsletter from "./components/Newsletter";
import Menu from "./components/Menu";
import Copyright from "./components/Copyright";

const Footer = () => {
  return (
    <footer className="max-w-full pt-5 px-8 my-3 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <Menu />
        <Newsletter />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
