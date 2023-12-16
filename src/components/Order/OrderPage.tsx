// components/OrderPage.tsx
import React, { useState } from "react";
// import SparkElement from "./SparkElement";

interface OrderPageProps {
  // You can pass any additional props if needed
}

const OrderPage: React.FC<OrderPageProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    email: "",
    subscribeToNewsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOrder = () => {
    // Add logic for handling the order
    console.log("Order placed with data:", formData);
    // You may want to submit this data to a server or perform other actions
  };

  const handleCancel = () => {
    // Add logic for canceling the order or closing the form
    console.log("Order canceled");
  };

  return (
    <div>
      {/* <SparkElement /> */}
      <h2>Order Form</h2>
      <form>
        {/* ... Spark element title ... */}
        {/* Checkbox for automatically filling from profile */}
        <label>
          Automatically fill from profile:
          <input
            type="checkbox"
            name="autoFillProfile"
            onChange={handleChange}
          />
        </label>

        {/* Input fields for order information */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Subscribe to Newsletter:
          <input
            type="checkbox"
            name="subscribeToNewsletter"
            checked={formData.subscribeToNewsletter}
            onChange={handleChange}
          />
        </label>

        {/* Action buttons */}
        <button type="button" onClick={handleOrder}>
          Order
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
