// pages/faq.tsx
import { GetStaticProps } from "next";

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
    <div>
      <h2>{faqData[0]?.title}</h2>
      <ul>
        {faqData.map((faqItem) => (
          <li key={faqItem.id}>
            <strong>{faqItem.question}</strong>
            <p>{faqItem.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<FaqProps> = async () => {
  // Fetch data from your API or JSON file
  const response = await fetch("http://localhost:3001/faq");
  const data: FaqData[] = await response.json();

  return {
    props: {
      faqData: data,
    },
  };
};

export default Faq;
