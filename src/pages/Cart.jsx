import React from "react";
import Container from "../components/common/Container";
import CartProduct from "../components/Cart/CartProduct";
import Subscribe from "../components/common/Subscribe";
import Summary from "../components/Cart/Summary";

const Cart = () => {
  return (
    <Container childClassName={"space-y-5 my-10"}>
      {/* Title */}
      <h2 className="text-5xl font-bold tracking-wide">Your Cart</h2>

      {/* Cart Container */}
      <div className="grid grid-cols-[2fr_1fr] gap-6 mb-10">
        {/* Cart product details */}
        <div className="border border-gray-400 p-5 rounded-xl w-full ">
          <CartProduct />
          <hr className="text-gray-300" />
          <CartProduct />
          <hr className="text-gray-300" />
          <CartProduct />
        </div>

        {/* Cart price section */}
        <div className="border border-gray-400 p-5 rounded-xl h-fit">
          <Summary
            subTotalPrice={"$564"}
            dilveryPrice={"$15"}
            discountPrice={"$-113"}
            totalPrice={"$467"}
          />
        </div>
      </div>
      <Subscribe />
    </Container>
  );
};

export default Cart;
