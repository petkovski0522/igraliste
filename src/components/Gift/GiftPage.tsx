// components/GiftPage.tsx
import React from "react";
import GiftCard, { GiftCardProps } from "./GiftCard"; // Corrected import
import style from "./style.module.css";
import GiftButton from "./GIftButton";

interface GiftPageProps {
  giftData: { cards: GiftCardProps[]; text: string };
  prices: { choose: string; price: number[] };
}

const GiftPage: React.FC<GiftPageProps> = ({ giftData, prices }) => {
  return (
    <div className={style.main}>
      <h2>{giftData.text}</h2>
      <div className={style.Card}>
        {giftData.cards.map((card) => (
          <GiftCard key={card.id} {...card} />
        ))}
      </div>
      <div className={style.second}>
        <h3>{prices.choose}</h3>
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
    </div>
  );
};

export default GiftPage;
