// Menu.tsx

import React, { ReactNode } from "react";
import style from "./style.module.css";
import Link from "next/link";
import BrandsList from "./BrandsList";

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
    { category: "Панталони", link: "/product/category/pants" },
    {
      category: "Здолништа / Шорцеви",
      link: "/products/category/skirts-shorts",
    },
    { category: "Фустани", link: "/product/category/dresses" },
    { category: "Палта и јакни", link: "/product/category/coats-jackets" },
    { category: "Долна облека", link: "/product/category/bottom-wear" },
  ];

  return (
    <ul className={`${style.menu} ${isOpen ? style.open : ""}`}>
      <Link href="/product">
        <li onClick={handleLinkClick}>Menu Item 1</li>
      </Link>

      <AccordionItem title="Vintage облека">
        <ul>
          {vintageCategories.map((category) => (
            <li key={category.category}>
              <Link href={category.link}>
                <a onClick={handleLinkClick}>{category.category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem title="Брендови">
        <BrandsList brands={brands} />
      </AccordionItem>
      <AccordionItem title="Menu Item 3"></AccordionItem>
      <li>Lifestyle</li>
      <Link href={"/gift"}>
        <li>Подари картичка*</li>
      </Link>

      <li>Menu Item 7</li>
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
