import React, { useState } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Input from "../components/Checkout/Input";
import CheckOutProduct from "../components/Checkout/CheckOutProduct";
import Info from "../components/Checkout/Info";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <Container childClassName={"flex justify-center"}>
      <div className="w-[80%] space-y-10 my-14">
        <h2 className="text-3xl font-semibold">Billing Details</h2>
        <div className="grid grid-cols-2">
          <div className="space-y-6">
            <Input
              label={"First Name"}
              labelFor={"name"}
              name={"name"}
              isRequire={true}
            />
            <Input
              label={"Street Address"}
              labelFor={"address"}
              name={"address"}
              isRequire={true}
            />
            <Input
              label={"Apartment, floor, etc (optional)"}
              labelFor={"house"}
              name={"house"}
            />
            <Input
              label={"Town/City"}
              labelFor={"city"}
              isRequire={true}
              name={"city"}
            />
            <Input
              label={"Pincode"}
              isRequire={true}
              labelFor={"pincode"}
              name={"pincode"}
            />
            <Input
              label={"Mobile Number"}
              labelFor={"mobile"}
              name={"mobile"}
              isRequire={true}
            />
            <Input
              label={"Email Address"}
              labelFor={"email"}
              name={"email"}
              isRequire={true}
            />
          </div>
          <div className="   space-y-5">
            {/* Products */}
            <div className="space-y-4">
              <CheckOutProduct />
              <CheckOutProduct />
            </div>
            {/* Pricing */}
            <div className="space-y-2.5">
              <Info tag={"Subtotal:"} price={"$90"} />
              <hr className="text-gray-300" />
              <Info tag={"Shipping:"} price={"Free"} />
              <hr className="text-gray-300" />
              <Info tag={"Total:"} price={"$90"} />
            </div>
            {/* Pricing method */}
            <div>
              <div className="flex gap-2 items-center">
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
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="cursor-pointer w-4 h-4"
                  type="radio"
                  name="cash"
                  id="cash"
                  value="Cash"
                  checked={paymentMethod === "Cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="cash" className="cursor-pointer">
                  Cash on Delivery
                </label>
              </div>
            </div>
            {/* confirm button */}
            <Button className={"w-[50%]"}>Place Order</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
