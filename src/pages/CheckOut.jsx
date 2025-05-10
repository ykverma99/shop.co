import React, { useCallback, useState } from "react";
import Container from "../components/common/Container";
import CartTotal from "../components/Checkout/CartTotal";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const backendUrl = import.meta.env.VITE_API_URL;

const CheckOut = () => {
  const { data, loading, error } = useFetch("cart");
  const [formData, setFormData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlePlaceOrder = useCallback(async () => {
    const shippingInfo = {
      fullName: formData.name,
      address: formData.address,
      apartment: `${formData.house || ""}`,
      city: formData.city,
      postalCode: formData.pincode,
      country: "India",
      phone: formData.mobile,
      email: formData.email,
    };

    try {
      const res = await axios.post(
        `${backendUrl}order`,
        {
          shippingInfo,
          paymentMethod,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Order placed successfully!");
      navigate("/");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to place the order"
      );
    }
  }, [formData, paymentMethod, navigate]);

  return (
    <Container childClassName={"flex justify-center"}>
      <div className="w-[80%] space-y-10 my-14">
        <h2 className="text-3xl font-semibold">Billing Details</h2>
        <div className="grid grid-cols-2">
          <CheckoutForm onChange={handleInputChange} />
          <CartTotal
            totalPrice={data?.data?.totalPrice}
            cartItems={data?.data?.cartItems}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
