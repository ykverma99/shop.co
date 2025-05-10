// src/pages/orders/OrderItemDetail.jsx

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const OrderItemDetail = () => {
  const { orderId } = useParams();
  const { data, loading, error } = useFetch(`order/${orderId}`);
  console.log(data?.data?.orderItems);

  const order = data?.data;

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!order)
    return (
      <div className="text-center py-10 text-gray-600">Order not found.</div>
    );

  const totalItems = order.orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = order.orderItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>

      <div className="space-y-6">
        {order.orderItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md gap-4"
          >
            <img
              src={item.color.productImages[0]}
              alt={item.product.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.product.name}</h2>
              <p className="text-gray-600">Price: ${item.product.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-800 font-medium mt-1">
                Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-gray-100 rounded-lg text-right">
        <p className="text-gray-700">Total Items: {totalItems}</p>
        <p className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderItemDetail;
