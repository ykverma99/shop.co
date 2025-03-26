import React, { useState } from "react";
import Title from "./Title";

const Price = () => {
  const [isShow, setisShow] = useState(true);
  const [price, setprice] = useState(1500);

  const handlePrice = (e) => {
    setprice(e.target.value);
  };

  return (
    <div>
      <Title
        title={"Price"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="flex items-center gap-2 text-sm font-medium pt-5 mb-4">
          <p>₹500</p>
          <input
            type="range"
            min={"500"}
            max={"5000"}
            value={price}
            onChange={handlePrice}
            className="w-full bg-gray-300 rounded-lg focus:outline-none hover:bg-gray-400 active:bg-gray-600"
          />
          <p>₹{price}</p>
        </div>
      )}
    </div>
  );
};

export default Price;
