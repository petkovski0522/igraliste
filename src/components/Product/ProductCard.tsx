// components/ProductCard.tsx
import React from "react";
import Link from "next/link";
import style from "./style.module.css";

interface ProductCardProps {
  id: string;
  img: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, img, name, price }) => {
  return (
    <Link href={`/product/${id}`}>
      <a className={style.card}>
        <img src={img} alt={name} />
        <div className={style.productDetails}>
          <h3>{name}</h3>
          <p>{` ${price} ден`}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
