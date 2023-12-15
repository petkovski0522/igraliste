// components/FaqCard.tsx
import React from "react";
import style from "./style.module.css";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => (
  <div className={style.card}>
    <h3>{question}</h3>
    <p>{answer}</p>
  </div>
);

export default FaqCard;
