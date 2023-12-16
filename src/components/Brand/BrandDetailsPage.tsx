// components/BrandDetailsPage.tsx

import React from "react";

interface BrandDetailsPageProps {
  brand: {
    id: number;
    brandName: string;
    brandIMG: string;
    brandInfo: string;
    brandDetails: string;
  };
}

const BrandDetailsPage: React.FC<BrandDetailsPageProps> = ({ brand }) => {
  return (
    <div>
      <h1>{brand.brandName}</h1>
      <img src={brand.brandIMG} alt={brand.brandName} />
      <p>{brand.brandInfo}</p>
      <p>{brand.brandDetails}</p>
    </div>
  );
};

export default BrandDetailsPage;
