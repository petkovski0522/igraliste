// components/AnnouncementBar.tsx

import React from "react";
import styles from "./style.module.css";

interface IAnnouncement {
  text: string;
  additionalText: string;
  imgSrc: string;
}

const AnnouncementBar: React.FC<IAnnouncement> = ({
  text,
  additionalText,
  imgSrc,
}) => {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.marqueeContent}>
        <span>{text}</span>
        <img src={imgSrc} alt="icon" />
        <span>{additionalText}</span>
        <img src={imgSrc} alt="icon" />
        <span>{text}</span>
        <img src={imgSrc} alt="icon" />
        <span>{additionalText}</span>
        <img src={imgSrc} alt="icon" />
        <span>{text}</span>
        <img src={imgSrc} alt="icon" />
        <span>{additionalText}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
