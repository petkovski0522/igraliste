// components/BrandCard.tsx

import React from "react";
import Link from "next/link";
import style from "./style.module.css";

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
    <div className={style.brandCard}>
      <div className={style.brandContainer}>
        <Link href={`/brand/${id}`}>
          <a>
            <h2>{brandName}</h2>
            <img src={brandIMG} alt={brandName} />
            <p>{brandInfo}</p>
            See Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
