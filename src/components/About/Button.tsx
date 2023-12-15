// components/Button.tsx
import React from "react";
import style from "./style.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, active = false }) => (
  <button
    className={active ? style.activeButton : style.button}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
