// src/pages/orders/Order.jsx

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Order = () => {
  const { data, loading, error } = useFetch("order");

  const orders = data?.data || [];

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load orders: {error}
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="text-center py-10 text-gray-600">No orders found.</div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <Link
            key={order._id}
            to={`/orders/${order._id}`}
            className="block bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Order ID: #{order._id}</p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-700 font-medium">
                  {order.orderItems.length} items
                </p>
                <p className="font-bold">
                  $
                  {order.orderItems
                    .reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Order;
