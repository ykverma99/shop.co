import React, { memo, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
const backendUrl = import.meta.env.VITE_API_URL;

const CartProduct = ({ item, refetch }) => {
  const [quantity, setquantity] = useState(item?.quantity);

  const debouncedQuantity = useDebounce(quantity);

  useEffect(() => {
    if (debouncedQuantity !== item?.quantity) {
      updateQuantity();
    }
  }, [debouncedQuantity]);

  const updateQuantity = async () => {
    try {
      await axios.post(
        `${backendUrl}cart`,
        {
          productId: item?.product?._id,
          quantity: quantity,
          colorId: item?.color?._id,
          sizeId: item?.size?._id,
        },
        {
          withCredentials: true, // if using cookies/auth
        }
      );
      refetch();
    } catch (err) {
      console.error("Failed to update cart quantity", err);
    }
  };
  return (
    <div className="flex items-center gap-2 w-full py-4">
      <div className="h-24 w-28">
        <img
          src={item?.color?.productImages[0]}
          alt=""
          className="h-full w-full object-fill rounded-xl"
        />
      </div>
      {/* details */}
      <div className="w-full">
        {/* info */}
        <div className="flex items-start justify-between leading-5">
          <div>
            <h4 className="font-bold">{item?.product?.productName}</h4>
            <div>
              <small>
                <span>Size: </span>
                <span className="text-gray-400">{item?.size?.label}</span>
              </small>
            </div>
            <small>
              <span>Color: </span>
              <span className="text-gray-400">{item?.color?.name}</span>
            </small>
          </div>
          {/* delete from cart */}
          <div>
            <RiDeleteBin6Line size={20} color="red" />
          </div>
        </div>
        {/* Price section */}
        <div className="flex justify-between">
          <h3 className="font-bold text-lg"> &#8377; {item?.price}</h3>
          {/* quantity */}
          <div className="flex justify-around items-center bg-gray-200 w-[15%] h-8 rounded-full text-xl">
            <button
              onClick={() =>
                setquantity((prev) => (prev > 1 ? (prev = prev - 1) : 1))
              }
              className="cursor-pointer"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => setquantity((prev) => prev + 1)}
              className="cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartProduct);
