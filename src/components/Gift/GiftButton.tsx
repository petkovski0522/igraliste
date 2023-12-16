// components/GiftButton.tsx
import React from "react";
import style from "./style.module.css";

interface GiftButtonProps {
  price: number;
  onClick: () => void;
}

const GiftButton: React.FC<GiftButtonProps> = ({ price, onClick }) => {
  return (
    <button className={style.giftButton} onClick={onClick}>
      {`${price} ден`}
    </button>
  );
};

export default GiftButton;
