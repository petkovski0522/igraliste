// Header.tsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import Menu from "./Menu"; // Import the Menu component
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Link href={"/"}>
          <div className={style.logo}>
            {/* Place your logo or image component here */}
            <img src="/assets/imagesAbout/Group1.png" alt="Logo" />
          </div>
        </Link>

        <div className={style.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} /> {/* Render the Menu component */}
    </div>
  );
};

export default Header;
