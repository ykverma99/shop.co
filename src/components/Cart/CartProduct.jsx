import React, { memo } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartProduct = () => {
  return (
    <div className="flex items-center gap-2 w-full py-4">
      <div className="bg-orange-400 h-24 w-28 rounded-xl"></div>
      {/* details */}
      <div className="w-full">
        {/* info */}
        <div className="flex items-start justify-between leading-5">
          <div>
            <h4 className="font-bold">Gradient Graphic T-shirt</h4>
            <div>
              <small>
                <span>Size:</span>
                <span className="text-gray-400">Large</span>
              </small>
            </div>
            <small>
              <span>Color:</span>
              <span className="text-gray-400">White</span>
            </small>
          </div>
          {/* delete from cart */}
          <div>
            <RiDeleteBin6Line size={20} color="red" />
          </div>
        </div>
        {/* Price section */}
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">$145</h3>
          {/* quantity */}
          <div className="flex justify-around items-center bg-gray-200 w-[15%] h-8 rounded-full text-xl">
            <button className="cursor-pointer">-</button>
            <p>1</p>
            <button className="cursor-pointer">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartProduct);
