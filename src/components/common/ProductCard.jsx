import React, { useMemo } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import FlippingCard from "./FlippingCard";

const rating = [
  <FaStar color="#FFC633" />,
  <FaStar color="#FFC633" />,
  <FaStar color="#FFC633" />,
  <FaStar color="#FFC633" />,
  <FaStarHalf color="#FFC633" />,
];

const ProductCard = React.memo(({ productName, price }) => {
  console.log("product card");
  return (
    <div className="space-y-2">
      <FlippingCard />
      <div>
        <h3 className="text-xl font-semibold">{productName}</h3>
        <div className="flex items-center gap-2 my-0.5">
          <div className="flex items-center gap-0.5">
            {rating.map((elm, idx) => (
              <span key={idx}>{elm}</span>
            ))}{" "}
          </div>
          <p className="text-sm">4.5/5</p>
        </div>
        <p className="text-2xl font-semibold tracking-wide">${price}</p>
      </div>
    </div>
  );
});

export default ProductCard;
