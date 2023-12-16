// pages/brand/[id].tsx

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import BrandDetailsPage from "../../components/Brand/BrandDetailsPage"; // Update the path as needed

interface Brand {
  id: number;
  brandName: string;
  brandIMG: string;
  brandInfo: string;
  brandDetails: string;
}

interface BrandDetailsProps {
  brand: Brand;
}

const BrandDetails: React.FC<BrandDetailsProps> = ({ brand }) => {
  return <BrandDetailsPage brand={brand} />;
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
  const response = await fetch(`http://localhost:3001/brands/${params.id}`); // Update the URL as needed
  const brand: Brand = await response.json();

  return {
    props: {
      brand,
    },
  };
};

export default BrandDetails;
