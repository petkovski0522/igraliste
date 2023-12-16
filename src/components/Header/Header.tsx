// Header.tsx

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import Menu from "./Menu";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false);
    };

    // Listen for route changes
    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Link href="/">
          <div className={style.logo}>
            <img src="/assets/imagesAbout/Group1.png" alt="Logo" />
          </div>
        </Link>
        <div className={style.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Header;
