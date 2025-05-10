import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import CartProduct from "../components/Cart/CartProduct";
import Subscribe from "../components/common/Subscribe";
import Summary from "../components/Cart/Summary";
import useFetch from "../hooks/useFetch";

const Cart = () => {
  const { data, loading, error, refetch } = useFetch("cart");
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsInitialLoading(false);
    }
  }, [loading]);
  return (
    <Container childClassName={"space-y-5 my-10"}>
      {/* Title */}
      <h2 className="text-5xl font-bold tracking-wide">Your Cart</h2>

      {/* Cart Container */}
      <div className="grid grid-cols-[2fr_1fr] gap-6 mb-10">
        {/* Cart product details */}
        <div className="border border-gray-400 p-5 rounded-xl w-full ">
          {isInitialLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {data?.data?.cartItems.length < 1 ? (
                <div className="w-full h-full flex justify-center items-center">
                  <h1 className="text-2xl font-semibold">
                    Add Product to cart
                  </h1>
                </div>
              ) : (
                data?.data?.cartItems.map((item) => (
                  <div key={item._id}>
                    <CartProduct item={item} refetch={refetch} />
                    <hr className="text-gray-300" />
                  </div>
                ))
              )}
            </>
          )}
        </div>

        {/* Cart price section */}
        <div className="border border-gray-400 p-5 rounded-xl h-fit">
          <Summary
            subTotalPrice={
              data?.data?.cartItems.length < 1 ? "0" : data?.data?.totalPrice
            }
            dilveryPrice={data?.data?.cartItems.length < 1 ? "0" : "15"}
            discountPrice={data?.data?.cartItems.length < 1 ? "0" : "-113"}
            totalPrice={
              data?.data?.cartItems.length < 1
                ? "0"
                : data?.data?.totalPrice + 15 - 113
            }
            checkout={data?.data?.cartItems.length >= 1}
          />
        </div>
      </div>
      <Subscribe />
    </Container>
  );
};

export default Cart;
