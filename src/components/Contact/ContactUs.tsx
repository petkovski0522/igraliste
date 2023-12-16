// components/ContactPage.tsx
import React from "react";

import GoldButton from "../GoldButton/GoldButton";
import style from "./style.module.css";
import { ContactPageProps } from "../interface";
import Link from "next/link";

const ContactUs: React.FC<ContactPageProps> = ({
  title,
  img,
  name,
  text,
  address,
  tel,
  number,
  workTime,
  week,
  weekend,
  contactBtn,
}) => (
  <div className={style.contactPage}>
    <img src={img[0]} alt="Contact Image" width={200} height={300} />
    <div className={style.contactInfo}>
      <h2>{name}</h2>
      <p>{text}</p>
      <h3>{address}</h3>
      <h3>{tel}</h3>
      <p>{number}</p>
      <div className={style.time}>
        <h3>{workTime}</h3>
        <p>{week}</p>
        <p>{weekend}</p>
      </div>
      <Link href={"/product"}>
        <GoldButton label={contactBtn} />
      </Link>
    </div>
  </div>
);

export default ContactUs;
