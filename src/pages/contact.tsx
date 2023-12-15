// pages/contactus.tsx
import React from "react";
import ContactUs from "../components/Contact/ContactUs";
import { GetStaticProps } from "next";
import style from "../styles/Home.module.css";
import { ContactPageProps } from "@/components/interface";
import TitleWithImage from "@/components/Faq/TitleWithImage";
interface ContactUsProps {
  contactData: ContactPageProps;
}

const Contact: React.FC<ContactUsProps> = ({ contactData }) => {
  return (
    <div className={style.contactUs}>
      <TitleWithImage
        title={contactData?.title}
        imagePath="/assets/images/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
        alt="Image Description"
        width={50}
        height={50}
      />
      <ContactUs {...contactData} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<ContactUsProps> = async () => {
  // Fetch data from your data source (e.g., db.json)
  const response = await fetch("http://localhost:3001/contact");
  const data: ContactPageProps = await response.json();

  return {
    props: {
      contactData: data,
    },
  };
};

export default Contact;
