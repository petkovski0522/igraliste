// components/Product/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";
import style from "./style.module.css"; // Import your CSS module

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={style.cardContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
