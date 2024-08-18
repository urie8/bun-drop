import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

function PaymentForm(orders) {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [swishInfo, setSwishInfo] = useState({
    number: "",
  });
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    adress: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [creditCardDisplay, setCreditCardDisplay] = useState(true);
  const [swishDisplay, setSwishDisplay] = useState(false);

  function displayCard() {
    setCreditCardDisplay(true);
    setSwishDisplay(false);
  }

  function displaySwish() {
    setSwishDisplay(true);
    setCreditCardDisplay(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle general form data (country, city, address)
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check what state we're on and the corresponding method to use
    if (creditCardDisplay) {
      setCardInfo({
        ...cardInfo,
        [name]: value,
      });
    } else if (swishDisplay) {
      setSwishInfo({
        ...swishInfo,
        [name]: value,
      });
    }
  };

  const validateCardInfo = () => {
    // Create an empty errors object to store validation error messages
    const errors = {};

    // We take the 'number' property from the card object and compare it to user input using regex
    if (!/^\d{16}$/.test(cardInfo.number)) {
      // If user input is less than 16 digits the error message will show
      errors.number = "Card number must be 16 digits";
    }

    if (!/^[a-zA-Z\s]+$/.test(cardInfo.name)) {
      errors.name = "Cardholder name can only contain letters and spaces";
    }

    if (!/^\d{2}\/\d{2}$/.test(cardInfo.expiry)) {
      errors.expiry = "Expiry date must be in MM/YY format";
    }

    if (!/^\d{3}$/.test(cardInfo.cvc)) {
      errors.cvc = "CVC must be 3 digits";
    }

    return errors;
  };

  // Same as card info method
  const validateSwishInfo = () => {
    const errors = {};

    if (!/^\d{10}$/.test(swishInfo.number)) {
      errors.number = "Telephone number must be 10 digits";
    }

    return errors;
  };

  function handleSubmit(event) {
    event.preventDefault();

    let validationErrors = {};
    if (creditCardDisplay) {
      validationErrors = validateCardInfo();
    } else if (swishDisplay) {
      validationErrors = validateSwishInfo();
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const randomId = Math.floor(Math.random() * 100);

    const order = {
      id: randomId,
      country: formData.country,
      city: formData.city,
      adress: formData.adress,
      orders: orders,
    };

    navigate(`/orderconfirmationpage/${order.id}`, { state: { order } });
    clearCart();
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
          />
          <input
            type="text"
            value={formData.adress}
            placeholder="Adress"
            className="input-form"
            onChange={handleInputChange}
            name="adress"
          />
          <button type="button" onClick={displayCard}>
            Card
          </button>
          <button type="button" onClick={displaySwish}>
            Swish
          </button>
          <input
            type="text"
            name="number"
            value={cardInfo.number}
            placeholder="Card Number"
            className="input-form"
            onChange={handleInputChange}
          />
          {errors.number && <p className="error">{errors.number}</p>}
          <input
            type="text"
            name="name"
            value={cardInfo.name}
            placeholder="Cardholder Name"
            className="input-form"
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="text"
            name="expiry"
            value={cardInfo.expiry}
            placeholder="Expiry Date"
            className="input-form"
            onChange={handleInputChange}
          />
          {errors.expiry && <p className="error">{errors.expiry}</p>}
          <input
            type="text"
            name="cvc"
            value={cardInfo.cvc}
            placeholder="CVC"
            className="input-form"
            onChange={handleInputChange}
          />
          {errors.cvc && <p className="error">{errors.cvc}</p>}
          <button type="submit">Confirm order</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="country"
            value={formData.country}
            placeholder="Country"
            className="input-form"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            className="input-form"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="adress"
            value={formData.adress}
            placeholder="Adress"
            className="input-form"
            onChange={handleInputChange}
          />
          <button type="button" onClick={displayCard}>
            Card
          </button>
          <button type="button" onClick={displaySwish}>
            Swish
          </button>
          <input
            type="text"
            name="number"
            value={swishInfo.number}
            placeholder="Telephone number"
            className="input-form"
            onChange={handleInputChange}
          />
          {errors.number && <p className="error">{errors.number}</p>}
          <button type="submit">Confirm order</button>
        </form>
      )}
    </>
  );
}

export default PaymentForm;
