import React, { useMemo } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import FlippingCard from "./FlippingCard";
import { Link, useNavigate } from "react-router-dom";

const rating = [
  <FaStar color="#FFC633" />,
  <FaStar color="#FFC633" />,
  <FaStar color="#FFC633" />,
  <FaStar color="#FFC633" />,
  <FaStarHalf color="#FFC633" />,
];

const ProductCard = React.memo(({ productName, price, imgSrc }) => {
  return (
    <div className="space-y-2">
      <FlippingCard productName={productName} imgSrc={imgSrc} />

      <div>
        <h3 className="text-xl font-semibold">{`${productName.slice(0, 22)} ${
          productName.length > 22 ? "..." : ""
        }`}</h3>
        <div className="flex items-center gap-2 my-0.5">
          <div className="flex items-center gap-0.5">
            {rating.map((elm, idx) => (
              <span key={idx}>{elm}</span>
            ))}{" "}
          </div>
          <p className="text-sm">4.5/5</p>
        </div>
        <p className="text-2xl font-semibold tracking-wide">&#8377; {price}</p>
      </div>
    </div>
  );
});

export default ProductCard;
