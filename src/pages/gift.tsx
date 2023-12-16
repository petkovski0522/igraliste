// pages/index.tsx
import React from "react";
import GiftPage from "../components/Gift/GiftPage";
import AnnouncementBar from "@/components/Cyhron/AnnouncementBar";

export interface GiftCardProps {
  id: string;
  title: string;
  img: string;
  text: string;
}
export interface GiftPageProps {
  giftData: { cards: GiftCardProps[]; text: string };
  prices: { choose: string; price: number[] };
}

const IndexPage: React.FC<GiftPageProps> = ({ giftData, prices }) => {
  const announcementContent = {
    text: "Нова колекција ",
    additionalText: "Valentines Winter Collection 2023   ",
    imgSrc: "/assets/imagesAbout/emojione-monotone_eight-pointed-star.png",
  };
  return (
    <>
      <AnnouncementBar {...announcementContent} />
      <GiftPage giftData={giftData} prices={prices} />
    </>
  );
};

export async function getStaticProps() {
  // Fetch gift data
  const giftResponse = await fetch("http://localhost:3001/gift");
  const giftData = await giftResponse.json();

  // Fetch prices data
  const pricesResponse = await fetch("http://localhost:3001/prices");
  const prices = await pricesResponse.json();

  return {
    props: {
      giftData,
      prices,
    },
  };
}

export default IndexPage;
