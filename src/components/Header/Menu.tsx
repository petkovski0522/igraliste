// Menu.tsx

import React from "react";
import style from "./style.module.css";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`${style.menu} ${isOpen ? style.open : ""}`}>
      {/* Add your menu items or components here */}
      <div>Menu Item 1</div>
      <div>Menu Item 2</div>
      {/* ... other menu items ... */}
    </div>
  );
};

export default Menu;
