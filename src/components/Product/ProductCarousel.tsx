// components/ProductCarousel.tsx

import React from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import style from "./style.module.css";
import { CarouselItem } from "react-bootstrap";

interface Product {
  id: string;
  img: string[];
  name: string;
  price: number;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className={style.carouselContainer}>
      <Carousel>
        {products.map((product) => (
          <Carousel.Item key={product.id} className={style.CarouselItem}>
            <Link href={`/product/${product.id}`}>
              <div className={style.one}>
                <a>
                  <img
                    className={`d-block w-100 ${style.carouselImage}`}
                    src={product.img[0]}
                    alt={product.id}
                  />

                  <div className={style.carouselText}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                </a>
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
