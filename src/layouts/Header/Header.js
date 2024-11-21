import React, { useState, useEffect } from "react";
import classes from "./Header.module.css"
import Logo from './components/Logo'
import Navmenu from './components/Navmenu'
import Navitems from './components/Navitems'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`max-w-full sticky top-0 py-4 px-8 ${classes.header} ${isScrolled ? classes.scrolled : ""}`}>
      <nav className="max-w-7xl flex justify-between items-center mx-auto">
        <Logo />
        <Navmenu />
        <Navitems />
      </nav>
    </header>
  )
}

export default Header