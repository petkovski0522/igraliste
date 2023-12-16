// Header.tsx

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.main}>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={style.logo}>
        {/* Place your logo or image component here */}
        <img src="/path/to/your/image.png" alt="Logo" />
      </div>
      <div className={style.searchIcon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default Header;
