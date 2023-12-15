// components/GoldButton.tsx
import React from "react";
import style from "./style.module.css";

interface GoldButtonProps {
  label: string;
  onClick?: () => void;
}

const GoldButton: React.FC<GoldButtonProps> = ({ label, onClick }) => (
  <button className={style.goldButton} onClick={onClick}>
    {label}
  </button>
);

export default GoldButton;
