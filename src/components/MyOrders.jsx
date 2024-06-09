import { useState, useEffect } from "react";
import useCart from "../hooks/useCart";
import OrderCard from "./OrderCard";
import Order from "../pages/OrderPage";
import PaymentForm from "./PaymentForm";

function MyOrders() {
  const { getCart, removeFromCart } = useCart();
  const [orders, setOrders] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  let totalPrice = 0;

  useEffect(() => {
    const myOrders = getCart();

    // Add the amount property to each order
    const ordersWithAmount = myOrders.map((o) => ({
      ...o,
      amount: o.amount || 1,
    }));

    // Merge orders with the same id and sum their amounts
    const mergedOrders = mergeAndSumAmounts(ordersWithAmount);

    setOrders(mergedOrders);
    console.log(mergedOrders);
  }, []);

  useEffect(() => {
    // Update localStorage whenever orders change
    localStorage.setItem("cart", JSON.stringify(orders));
  }, [orders]);

  // Calculate the total price of the order
  useEffect(() => {
    orders.map((o) => {
      console.log(o);
      totalPrice = totalPrice + o.price * o.amount;
      setSumTotal(totalPrice);
    });
  }, [orders]);

  // Function to merge items with the same id and sum their amounts
  const mergeAndSumAmounts = (array) => {
    const mergedData = array.reduce((acc, item) => {
      // If we find an item with the same id as the one we are iterating over we just add to the total amount
      const existingItem = acc.find((accItem) => accItem.id === item.id);

      if (existingItem) {
        existingItem.amount += item.amount;
      } else {
        acc.push({ ...item });
      }

      return acc;
    }, []);

    return mergedData;
  };

  const handleIncrease = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o.id === id ? { ...o, amount: o.amount + 1 } : o))
    );
  };

  const handleDecrease = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((o) =>
        o.id === id && o.amount > 1 ? { ...o, amount: o.amount - 1 } : o
      )
    );
  };

  const handleDelete = (id) => {
    removeFromCart(id);
    setOrders((prevOrders) => prevOrders.filter((o) => o.id !== id));
  };

  return (
    <>
      <h1>Your Order</h1>
      <div className="orderpage-container">
        <div className="orders-container">
          {orders.map((o) => (
            <OrderCard
              key={o.id}
              title={o.title}
              price={o.price}
              image={o.img}
              amount={o.amount}
              onIncrease={() => handleIncrease(o.id)}
              onDecrease={() => handleDecrease(o.id)}
              onDelete={() => handleDelete(o.id)}
            />
          ))}
        </div>
        <div className="form-container">
          <PaymentForm orders={orders} />
          <h2 className="totalprice">Total: ${sumTotal}</h2>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
