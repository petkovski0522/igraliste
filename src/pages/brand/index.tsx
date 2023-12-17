// pages/brand/index.tsx

import React from "react";
import { GetStaticProps } from "next";
import BrandCard from "../../components/Brand/BrandCard"; // Update the path as needed
import style from "../../styles/Home.module.css";
interface Brand {
  id: number;
  brandName: string;
  brandIMG: string;
  brandInfo: string;
  brandDetails: string;
}

interface BrandListProps {
  brands: Brand[];
}

const BrandList: React.FC<BrandListProps> = ({ brands }) => {
  return (
    <div className={style.brand}>
      <h1>Сите брендови</h1>
      {brands.map((brand) => (
        <BrandCard key={brand.id} {...brand} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<BrandListProps> = async () => {
  const response = await fetch("http://localhost:3001/brands"); // Update the URL as needed
  const brands: Brand[] = await response.json();

  return {
    props: {
      brands,
    },
  };
};

export default BrandList;
