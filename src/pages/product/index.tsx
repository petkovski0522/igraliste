// pages/products/index.tsx
import React from "react";
import { GetServerSideProps } from "next";
import ProductCard from "../../components/Product/ProductCard";
import ProductList from "../../components/Product/ProductList";
import style from "../../styles/Home.module.css";

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div className={style.ProductList}>
      <h1>Products Page</h1>
      <ProductList products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async () => {
  // Fetch products data on the server side
  const response = await fetch("http://localhost:3001/products");
  const products: Product[] = await response.json();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
