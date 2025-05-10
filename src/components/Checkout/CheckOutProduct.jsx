import React from "react";

const CheckOutProduct = ({ title, price, img }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-14 w-16 ">
        <img src={img} alt="" className="h-full w-full object-center rounded" />
      </div>
      <div className="flex justify-between items-center w-full">
        <p>
          {title.slice(0, 20)}
          {title.length > 20 ? "..." : ""}
        </p>
        <p className="font-semibold">&#8377; {price}</p>
      </div>
    </div>
  );
};

export default CheckOutProduct;
