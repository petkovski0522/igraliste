// components/BrandCard.tsx

import React from "react";

interface BrandCardProps {
  id: number;
  brandName: string;
  brandIMG: string;
  brandInfo: string;
}

const BrandCard: React.FC<BrandCardProps> = ({
  id,
  brandName,
  brandIMG,
  brandInfo,
}) => {
  return (
    <div>
      <a href={`/brand/${id}`}>
        <h2>{brandName}</h2>
        <img src={brandIMG} alt={brandName} />
        <p>{brandInfo}</p>
        See Details
      </a>
    </div>
  );
};

export default BrandCard;
