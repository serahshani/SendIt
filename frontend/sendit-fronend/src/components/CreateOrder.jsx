import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateOrder.css";

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    sender: "",
    recipient: "",
    pickupLocation: "",
    destination: "",
    weight: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const data = await response.json();
      setMessage("Order created successfully!");
      console.log("Order Details:", data);

      // Redirect to Payment page
      navigate("/Payment-page");
    } catch (err) {
      setMessage("Error creating order. Please try again.");
    }
  };

  return (
    <div className="create-order-container">
      <div className="create-order-card">
        <h2>Create Order</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="sender"
            placeholder="Sender Name"
            value={formData.sender}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="recipient"
            placeholder="Recipient Name"
            value={formData.recipient}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pickupLocation"
            placeholder="Pickup Address"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Delivery Address"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Package Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <button className="create-order-button" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;
