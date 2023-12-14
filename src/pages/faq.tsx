// pages/faq.tsx
import React from "react";
import FaqCard from "../components/Faq/FaqCard";
import { GetStaticProps } from "next";
import style from "../styles/Home.module.css";

interface FaqData {
  id: number;
  question: string;
  answer: string;
  title: string;
}

interface FaqProps {
  faqData: FaqData[];
}

const Faq: React.FC<FaqProps> = ({ faqData }) => {
  return (
    <div className={style.faq}>
      <h1>{faqData[0]?.title}</h1>
      {faqData.slice(1).map((faqItem) => (
        <FaqCard
          key={faqItem.id}
          question={faqItem.question}
          answer={faqItem.answer}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<FaqProps> = async () => {
  const response = await fetch("http://localhost:3001/faq");
  const data: FaqData[] = await response.json();

  return {
    props: {
      faqData: data,
    },
  };
};

export default Faq;
