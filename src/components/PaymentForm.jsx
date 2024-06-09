import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PaymentForm(orders) {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const navigate = useNavigate();

  const initialValues = {
    country: "",
    city: "",
    adress: "",
  };
  const [formData, setFormData] = useState({ initialValues });
  const [creditCardDisplay, setCreditCardDisplay] = useState("true");
  const [swishDisplay, setSwishDisplay] = useState("false");

  function displayCard() {
    setCreditCardDisplay(true);
    setSwishDisplay(false);
  }

  function displaySwish() {
    setSwishDisplay(true);
    setCreditCardDisplay(false);
  }

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let randomId = Math.floor(Math.random() * 100);

    let order = {
      id: randomId,
      country: formData.country,
      city: formData.city,
      adress: formData.adress,
      orders: orders,
    };

    console.log(order);
    navigate(`/orderconfirmationpage/${order.id}`, { state: { order } });
  }

  return (
    <>
      {creditCardDisplay ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.country}
            placeholder="Country"
            className="input-form"
            onChange={handleInputChange}
            name="country"
          />
          <input
            type="text"
            value={formData.city}
            placeholder="City"
            className="input-form"
            onChange={handleInputChange}
            name="city"
          ></input>
          <input
            type="text"
            value={formData.adress}
            placeholder="Adress"
            className="input-form"
            onChange={handleInputChange}
            name="adress"
          ></input>
          <button onClick={displayCard}>Card</button>
          <button onClick={displaySwish}>Swish</button>
          <input type="text" name="number" placeholder="Card Number" />
          <input type="text" name="name" placeholder="Cardholder Name" />
          <input type="text" name="expiry" placeholder="Expiry Date" />
          <input type="text" name="cvc" placeholder="CVC" />
          <button type="submit">Confirm order</button>
        </form>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Country" className="input-form" />
            <input
              type="text"
              placeholder="City"
              className="input-form"
            ></input>
            <input
              type="text"
              placeholder="Adress"
              className="input-form"
            ></input>
            <button onClick={displayCard}>Card</button>
            <button onClick={displaySwish}>Swish</button>
            <input type="text" name="number" placeholder="Telephone number" />
            <button type="submit">Confirm order</button>
          </form>
        </>
      )}
    </>
  );
}

export default PaymentForm;
