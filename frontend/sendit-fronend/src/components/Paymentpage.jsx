import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePaymentSelect = (method) => {
    setSelectedMethod(method);
  };

  const handlePaymentSubmit = () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
    } else {
      alert(`Payment method selected: ${selectedMethod}`);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Pay for your package here </h2>
        <div className="package-details">
         
        </div>

        <h3>How would you like to pay?</h3>
        <div className="payment-methods">
            <button
            className={`payment-option ${selectedMethod === "M-Pesa" ? "active" : ""}`}
            onClick={() => handlePaymentSelect("M-Pesa")}
          >
            <img
              src="https://static.cdnlogo.com/logos/m/95/m-pesa.svg"
              alt="M-Pesa"
              className="payment-icon"
            />
            M-Pesa
          </button>
           <button
            className={`payment-option ${selectedMethod === "Cash" ? "active" : ""}`}
            onClick={() => handlePaymentSelect("Cash")}
          >
            <i className="fa fa-money-bill payment-icon"></i> Cash
          </button>
          <button
            className={`payment-option ${selectedMethod === "Card" ? "active" : ""}`}
            onClick={() => handlePaymentSelect("Card")}
          >
            <i className="fa fa-credit-card"></i> Card
          </button>
        </div>

        {/* Conditional Rendering Based on Payment Method */}
        <div className="payment-details">
          {selectedMethod === "M-Pesa" && (
            <div className="mpesa-form">
              <h4>Enter Your Phone Number</h4>
              <input
                type="text"
                placeholder="e.g., 0712345678"
                maxLength="10"
                className="payment-input"
              />
            </div>
          )}

          {selectedMethod === "Card" && (
            <div className="card-form">
              <h4>Card Details</h4>
              <input
                type="text"
                placeholder="Card Number"
                maxLength="16"
                className="payment-input"
              />
              <div className="card-details-row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="payment-input"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  maxLength="3"
                  className="payment-input"
                />
              </div>
              <input
                type="text"
                placeholder="ZIP Code"
                className="payment-input"
              />
            </div>
          )}

          {selectedMethod === "Cash" && (
            <div className="cash-info">
              <h4>Pay with Cash</h4>
              <p>You can pay directly to our delivery agent.</p>
            </div>
          )}
        </div>
        <button className="pay-now" onClick={handlePaymentSubmit}>
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
