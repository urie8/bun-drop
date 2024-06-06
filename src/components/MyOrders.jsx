import { useState, useEffect } from "react";
import useCart from "../hooks/useCart";
import OrderCard from "./OrderCard";
import Order from "../pages/Order";
function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { addToCart, getCart } = useCart();

  useEffect(() => {
    const myOrders = getCart();
    console.log(myOrders);
  }, []);

  // Get all the orders from localstorage
  // Set them into cards for display with ammount and the toal price at the end
  return (
    <>
      <div className="orders-container">
        {orders.map((o) => (
          <OrderCard key={o.id} />
        ))}
      </div>
    </>
  );
}

export default MyOrders;
