// pages/brand/[id].tsx

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import BrandDetailsPage from "../../components/Brand/BrandDetailsPage"; // Update the path as needed
import ProductCardContainer from "../../components/Product/ProductCardContainer"; // Import the ProductCardContainer component
import { Product } from "@/components/interface";

interface Brand {
  id: number;
  brandName: string;
  brandIMG: string;
  brandInfo: string;
  brandDetails: string;
}

interface BrandDetailsProps {
  brand: Brand;
  products: Product[];
}

const BrandDetails: React.FC<BrandDetailsProps> = ({ brand, products }) => {
  return (
    <>
      <BrandDetailsPage brand={brand} />
      <ProductCardContainer products={products} />{" "}
      {/* Use ProductCardContainer as intended */}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3001/brands"); // Update the URL as needed
  const brands: Brand[] = await response.json();

  const paths = brands.map((brand) => ({
    params: { id: brand.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BrandDetailsProps> = async ({
  params,
}) => {
  const brandResponse = await fetch(
    `http://localhost:3001/brands/${params.id}`
  );
  const brand: Brand = await brandResponse.json();

  const productsResponse = await fetch(`http://localhost:3001/products`);
  const products: Product[] = await productsResponse.json();
  const limitedProducts = products.slice(0, 6);
  return {
    props: {
      brand,
      products: limitedProducts,
    },
  };
};

export default BrandDetails;
