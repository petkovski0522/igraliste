// components/HamburgerMenu.tsx
import React, { useState } from "react";

interface AccordionItem {
  category?: string;
  accessory?: string;
  id?: string;
  name?: string;
  content?: string;
}

interface MenuItem {
  title: string;
  content?: string;
  items: AccordionItem[];
}

interface HamburgerMenuProps {
  menuItems: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="header">
        <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>Simple Item</li>
            {menuItems.map((menuItem, index) => (
              <li key={index} className="accordion">
                <div className="accordion-title">{menuItem.title}</div>
                <div className="accordion-content">
                  <ul>
                    {menuItem.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div className="accordion-item">
                          <div className="item-title">
                            {item.category || item.name || item.accessory}
                          </div>
                          {item.content && (
                            <div className="item-content">{item.content}</div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li className="accordion">
              <div className="accordion-title">Accordion 2</div>
              <div className="accordion-content">
                <ul>
                  <li>Sub Item 1</li>
                  <li>Sub Item 2</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
