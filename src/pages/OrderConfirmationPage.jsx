import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
function OrderConfirmationPage() {
  const { orderId } = useParams();
  const location = useLocation();
  // Using location to get the state and access the orders to display
  const orders = location.state.order.orders.orders;

  return (
    <>
      <div>
        <div className="receipt-container">
          <h1>Thank you!</h1>
          <h3>Your order will arrive shortly</h3>
          <div className="receipt">
            <h2>Order number: {orderId}</h2>
            <h4>Country: {location.state.order.country}</h4>
            <h4>City: {location.state.order.city}</h4>
            <h4>Adress: {location.state.order.adress}</h4>
            <h4>Order:</h4>
            {orders.map((o) => (
              <div key={o.id} className="receipt-items">
                <p>{o.amount}</p>
                <p>{o.title}</p>
                <p>${o.price}</p>
              </div>
            ))}
          </div>
          <button className="button-30">Track your order</button>
        </div>
      </div>
    </>
  );
}

export default OrderConfirmationPage;
