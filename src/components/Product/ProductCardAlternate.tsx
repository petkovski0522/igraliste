// components/ProductCardAlternate.tsx
import React from "react";
import Link from "next/link";
import style from "./style.module.css";

interface ProductCardAlternateProps {
  id: string;
  img: string;
  name: string;
  price: number;
}

const ProductCardAlternate: React.FC<ProductCardAlternateProps> = ({
  id,
  img,
  name,
  price,
}) => {
  return (
    <div className={style.imgcontainer}>
      <Link href={`/product/${id}`}>
        <a className={style.cardAlternate}>
          <img src={img} alt={name} />
          <div className={style.productDetailsAlternate}>
            <h3>{name}</h3>
            <p>{`Price: ${price} ден`}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCardAlternate;
