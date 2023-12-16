// pages/products/index.tsx
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import ProductList from "../../components/Product/ProductList";
import style from "../../styles/Home.module.css";

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  category: string;
  color: string;
  brand: string;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    brands: [] as string[],
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filterType: string, value: string | string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const uniqueBrands = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "" || product.category === filters.category) &&
      (filters.color === "" || product.color === filters.color) &&
      (filters.brands.length === 0 || filters.brands.includes(product.brand))
    );
  });

  return (
    <div className={style.ProductList}>
      <h1>Products Page</h1>

      {/* Toggle Filters Button */}
      <button onClick={toggleFilters}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filters Section */}
      {showFilters && (
        <div>
          {/* Category Buttons */}
          <div>
            <span>Category:</span>
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange("category", category)}
                className={filters.category === category ? style.active : ""}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Brand Checkboxes */}
          <div>
            <span>Brands:</span>
            {uniqueBrands.map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => {
                    const newBrands = filters.brands.includes(brand)
                      ? filters.brands.filter((b) => b !== brand)
                      : [...filters.brands, brand];
                    handleFilterChange("brands", newBrands);
                  }}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Product List */}
      <ProductList products={filteredProducts} />
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
