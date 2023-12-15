// components/GoldButton.tsx
import React from "react";
import style from "./style.module.css";

interface GoldButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const GoldButton: React.FC<GoldButtonProps> = ({
  label,
  onClick,
  className,
}) => (
  <button className={`${style.goldButton} ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default GoldButton;
