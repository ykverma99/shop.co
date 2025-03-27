import React, { memo } from "react";
import Amount from "./Amount";
import Button from "../common/Button";

const Summary = ({
  subTotalPrice,
  discountPrice,
  dilveryPrice,
  totalPrice,
}) => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Order Summary</h2>
      {subTotalPrice && <Amount title={"Subtotal"} price={subTotalPrice} />}
      {discountPrice && (
        <Amount
          title={"Discount"}
          price={discountPrice}
          color={"text-red-500"}
        />
      )}
      {dilveryPrice && <Amount title={"Dilvery"} price={dilveryPrice} />}
      <hr className="text-gray-300" />
      {totalPrice && <Amount title={"Total"} price={totalPrice} />}
      <Button className={"w-full"}>Go to Checkout</Button>
    </div>
  );
};

export default memo(Summary);
