// BrandsList.tsx

import React from "react";
import Link from "next/link";

interface BrandsListProps {
  brands: { id: string; name: string }[];
}

const BrandsList: React.FC<BrandsListProps> = ({ brands }) => {
  return (
    <ul>
      {brands.map((brand) => (
        <li key={brand.id}>
          <Link href={`/brand/${brand.id}`}>
            <a>{brand.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BrandsList;
