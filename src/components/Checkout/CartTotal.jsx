import React from "react";
import Button from "../common/Button";
import CheckOutProduct from "./CheckOutProduct";
import Info from "./Info";

const CartTotal = ({
  cartItems,
  totalPrice,
  paymentMethod,
  setPaymentMethod,
  onPlaceOrder,
}) => {
  return (
    <div className="space-y-5">
      {/* Products */}
      <div className="space-y-4">
        {cartItems?.map((item, idx) => (
          <CheckOutProduct
            key={item + idx}
            title={item?.product.productName}
            price={item?.product.price}
            img={item?.color.productImages[0]}
          />
        ))}
      </div>
      {/* Pricing */}
      <div className="space-y-2.5">
        <Info tag={"Subtotal:"} price={totalPrice ? totalPrice : "0"} />
        <hr className="text-gray-300" />
        <Info tag={"Shipping:"} price={"0"} />
        <hr className="text-gray-300" />
        <Info tag={"Total:"} price={totalPrice ? totalPrice : "0"} />
      </div>
      {/* Pricing method */}
      <div>
        {/* <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="online"
            id="online"
            value="Bank"
            checked={paymentMethod === "Bank"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="cursor-pointer w-4 h-4"
          />
          <label htmlFor="online" className="cursor-pointer">
            Bank
          </label>
        </div> */}
        <div className="flex gap-2 items-center">
          <input
            className="cursor-pointer w-4 h-4"
            type="radio"
            name="cash"
            id="cash"
            value="Cash"
            checked={paymentMethod === "COD"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="cash" className="cursor-pointer">
            Cash on Delivery
          </label>
        </div>
      </div>
      {/* confirm button */}
      <Button className={"w-[50%]"} onClick={onPlaceOrder}>
        Place Order
      </Button>
    </div>
  );
};

export default React.memo(CartTotal);
