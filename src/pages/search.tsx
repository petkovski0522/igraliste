// pages/SearchPage.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "../components/Product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Home.module.css";

// Define the interface for the product
interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
}

const SearchPage: React.FC = () => {
  const router = useRouter();

  // Specify the type of products as an array of Product
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <header>
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} />
        <input
          className={style.input}
          type="text"
          placeholder="Пребарувај..."
        />
      </header>
      <main>
        {/* Display products */}
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
