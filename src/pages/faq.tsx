// pages/faq.tsx
import React from "react";
import FaqList from "../components/Faq/FaqList";
import { GetStaticProps } from "next";
import style from "../styles/Home.module.css";
import TitleWithImage from "@/components/Faq/TitleWithImage";

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
      <TitleWithImage
        title={faqData[0]?.title}
        imagePath="/assets/images/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
        alt="Image Description"
        width={50}
        height={50}
      />
      <FaqList faqData={faqData} />
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
