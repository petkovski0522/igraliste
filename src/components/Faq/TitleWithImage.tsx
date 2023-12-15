// components/TitleWithImage.tsx
import React from "react";
import style from "./style.module.css";

interface TitleWithImageProps {
  title: string;
  imagePath: string;
  alt: string;
  width?: number;
  height?: number;
}

const TitleWithImage: React.FC<TitleWithImageProps> = ({
  title,
  imagePath,
  alt,
  width = 50,
  height = 50,
}) => (
  <div className={style.fa}>
    <h2>{title}</h2>
    <img src={imagePath} alt={alt} width={width} height={height} />
  </div>
);

export default TitleWithImage;
