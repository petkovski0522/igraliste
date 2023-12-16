// pages/products/[id].tsx
import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import AnnouncementBar from "@/components/Cyhron/AnnouncementBar";

interface Product {
  id: string;
  img: string[];
  name: string;
  images: string[];
  price: number;
  size: string[];
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const announcementContent = {
    text: "Нова колекција ",
    additionalText: "Valentines Winter Collection 2023   ",
    imgSrc: "/assets/imagesAbout/emojione-monotone_eight-pointed-star.png",
  };
  return (
    <div>
      <AnnouncementBar {...announcementContent} />
      <h1>{product.name}</h1>
      <div>
        <img
          src={product.img[0]}
          alt={product.name}
          width={800}
          height={1200}
        />
      </div>
      <div>
        {/* Image Carousel */}
        <div className="image-carousel">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              width={200}
              height={300}
            />
          ))}
        </div>
      </div>
      <p>{`Price: ${product.price} MKD`}</p>
      <div>
        <p>Available Sizes:</p>
        <ul>
          {product.size.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const id = params?.id as string; // Extract id and cast to string

  // Fetch product data based on the ID
  const response = await fetch(`http://localhost:3001/products/${id}`);
  const product: Product = await response.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
