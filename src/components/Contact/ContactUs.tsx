// components/ContactPage.tsx
import React from "react";

import GoldButton from "../GoldButton/GoldButton";
import style from "./style.module.css";
import { ContactPageProps } from "../interface";

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
      <p>{address}</p>
      <p>
        {tel} {number}
      </p>
      <p>{workTime}</p>
      <p>{week}</p>
      <p>{weekend}</p>
      <GoldButton label={contactBtn} />
    </div>
  </div>
);

export default ContactUs;
