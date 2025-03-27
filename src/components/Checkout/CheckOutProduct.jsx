import React from "react";

const CheckOutProduct = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-14 w-16 rounded">
        <img
          src="/images/gym.png"
          alt=""
          className="h-full w-full object-cover aspect-square rounded"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <p>Gucci Duffle Bag </p>
        <p className="font-semibold">$45</p>
      </div>
    </div>
  );
};

export default CheckOutProduct;
