// components/FaqCard.tsx
import React from "react";
import style from "./style.module.css";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => (
  <div className={style.card}>
    <h2>{question}</h2>
    <p>{answer}</p>
  </div>
);

export default FaqCard;
