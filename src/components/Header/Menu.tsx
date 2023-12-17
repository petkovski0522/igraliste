// Menu.tsx

import React, { ReactNode } from "react";
import style from "./style.module.css";
import Link from "next/link";
import BrandsList from "./BrandsList";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { accordionItems } from "./menuItem";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  const brands = [
    { id: "0", name: "See all" },
    { id: "1", name: "Pinc Partywear" },
    { id: "2", name: "Factory Girl" },
    { id: "3", name: "Main Days" },
    { id: "4", name: "Нежно" },
    { id: "5", name: "Ред" },
    { id: "6", name: "Наш" },
    { id: "7", name: "Зш да не" },
    { id: "8", name: "Fraeil" },
    { id: "9", name: "Urma" },
    { id: "10", name: "Candle Nest" },
    { id: "11", name: "Beyond Green" },
    { id: "12", name: "Gatta" },
  ];

  const vintageCategories = [
    { category: "Види ги сите", link: "/product" },
    { category: "Панталони", link: "/product" },
    {
      category: "Здолништа / Шорцеви",
      link: "/product",
    },
    { category: "Фустани", link: "/product" },
    { category: "Палта и јакни", link: "/product" },
    { category: "Долна облека", link: "/product" },
  ];
  const vintageCategoriesAccessory = [
    { category: "Види ги сите", link: "/product" },
    { category: "Ташни", link: "/product" },
    { category: "Накит", link: "/product" },
  ];

  return (
    <ul className={`${style.menu} ${isOpen ? style.open : ""}`}>
      <Link href="/product">
        <li>Ново</li>
      </Link>
      <div className={style.acc}>
        <AccordionItem title="Vintage облека">
          <ul className={style.accordionItems}>
            {vintageCategories.map((category) => (
              <li key={category.category}>
                <Link href={category.link}>
                  <a onClick={handleLinkClick}>{category.category}</a>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
        <FontAwesomeIcon icon={faArrowDown} className={style.arrowIcon} />
      </div>
      <div className={style.acc}>
        <AccordionItem title="Брендови">
          <BrandsList brands={brands} />
        </AccordionItem>
        <FontAwesomeIcon icon={faArrowDown} className={style.arrowIcon} />
      </div>
      <AccordionItem title="Аксесоари">
        <ul className={style.accordionItems}>
          {vintageCategoriesAccessory.map((category) => (
            <li key={category.category}>
              <Link href={category.link}>
                <a onClick={handleLinkClick}>{category.category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <li>Lifestyle</li>
      <Link href={"/gift"}>
        <li>Подари картичка*</li>
      </Link>
      <Link href={"/product"}>
        <li>Попуст</li>
      </Link>
      <div className={style.menuDown}>
        <li>Кошничка</li>
        <li>Омилени</li>
        <li>
          <Link href={"/register"}>Регистрирај се</Link> /{" "}
          <Link href={"/login"}>логирај се</Link>
        </li>
      </div>
    </ul>
  );
};

interface AccordionItemProps {
  title: string;
  children?: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div onClick={toggleAccordion} className={style.accordionHeader}>
        {title}
      </div>
      {isOpen && <div className={style.accordionContent}>{children}</div>}
    </li>
  );
};

export default Menu;
