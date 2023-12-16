// pages/index.tsx

import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import ProductCarousel from "../components/Product/ProductCarousel";
import AnnouncementBar from "@/components/Cyhron/AnnouncementBar";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/Home.module.css";

interface Product {
  id: string;
  img: string[];
  name: string;
  price: number;
}

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const announcementContent = {
    text: "Нова колекција ",
    additionalText: "Valentines Winter Collection 2023   ",
    imgSrc: "/assets/imagesAbout/emojione-monotone_eight-pointed-star.png",
  };
  return (
    <>
      <AnnouncementBar {...announcementContent} />
      <div className={style.home}>
        <h3>Trendy парчиња во моментов</h3>
        <ProductCarousel products={products} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    const products: Product[] = response.data;

    return {
      props: { products },
    };
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    return {
      props: { products: [] },
    };
  }
};

export default Home;
