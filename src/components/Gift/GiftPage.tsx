// components/GiftPage.tsx
import React from "react";
import GiftCard, { GiftCardProps } from "./GiftCard"; // Corrected import
import style from "./style.module.css";
import GiftButton from "./GIftButton";

interface GiftPageProps {
  giftData: { cards: GiftCardProps[] };
  prices: { choose: string; price: number[] };
}

const GiftPage: React.FC<GiftPageProps> = ({ giftData, prices }) => {
  return (
    <div>
      <h1>Gift Cards</h1>
      <div className={style.giftCard}>
        {giftData.cards.map((card) => (
          <GiftCard key={card.id} {...card} />
        ))}
      </div>
      <h2>Prices</h2>
      <div className={style.GiftButton}>
        {prices.price.map((price) => (
          <GiftButton
            key={price}
            price={price}
            onClick={() => console.log(`Gift selected: ${price}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default GiftPage;
