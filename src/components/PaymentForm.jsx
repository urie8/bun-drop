import React, { useState, useEffect } from "react";

function PaymentForm(order) {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      if (!validateCardNumber(value)) {
        // Handle invalid card number case
      }
      formattedValue = formatCardNumber(value);
    }

    // Other validations for expiry and cvc can be added here

    setCardInfo({ ...cardInfo, [name]: formattedValue });
  };

  const formatCardNumber = (number) => {
    // Format number for display, e.g., "1234 5678 9012 3456"
    const numberWithoutSpaces = number.replace(/\\\\s+/g, "");
    return numberWithoutSpaces.replace(/(\\\\d{4})/g, "$1 ").trim();
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Country" className="input-form" />
        <input type="text" placeholder="City" className="input-form"></input>
        <input type="text" placeholder="Adress" className="input-form"></input>
        <button>Card</button>
        <button>Swish</button>
        <input
          type="text"
          name="number"
          value={cardInfo.number}
          onChange={handleInputChange}
          placeholder="Card Number"
        />
        <input
          type="text"
          name="name"
          value={cardInfo.name}
          onChange={handleInputChange}
          placeholder="Cardholder Name"
        />
        <input
          type="text"
          name="expiry"
          value={cardInfo.expiry}
          onChange={handleInputChange}
          placeholder="Expiry Date"
        />
        <input
          type="text"
          name="cvc"
          value={cardInfo.cvc}
          onChange={handleInputChange}
          placeholder="CVC"
        />
        {/* Additional inputs and elements will be added here */}
      </form>
    </>
  );
}

export default PaymentForm;
