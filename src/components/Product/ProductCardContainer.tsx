// components/ProductCardContainer.tsx
import React from "react";
import ProductCardAlternate from "./ProductCardAlternate"; // Import the new component
import { Product } from "../interface";
import style from "./style.module.css";

interface ProductCardContainerProps {
  products: Product[];
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  products,
}) => {
  return (
    <div className={style.productCardContainer}>
      {products.map((product) => (
        <ProductCardAlternate key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductCardContainer;
