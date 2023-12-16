// components/GiftCard.tsx
import React from "react";
import styles from "./style.module.css"; // Import the CSS module

export interface GiftCardProps {
  id: string;
  title: string;
  img: string;
  text: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ id, title, img }) => {
  return (
    <div className={styles.giftCard}>
      <img className={styles.giftImage} src={img} alt={title} />
    </div>
  );
};

export default GiftCard;
