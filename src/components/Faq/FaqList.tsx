// components/Faq/FaqList.tsx
import React from "react";
import FaqCard from "./FaqCard";

interface FaqData {
  id: number;
  question: string;
  answer: string;
}

interface FaqListProps {
  faqData: FaqData[];
}

const FaqList: React.FC<FaqListProps> = ({ faqData }) => (
  <>
    {faqData.slice(1).map((faqItem) => (
      <FaqCard
        key={faqItem.id}
        question={faqItem.question}
        answer={faqItem.answer}
      />
    ))}
  </>
);

export default FaqList;
