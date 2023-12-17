// components/OrderPage.tsx
import React, { useState } from "react";
import style from "./style.module.css";
import Link from "next/link";

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
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOrder = () => {
    // Check if all required fields are filled
    const isFormValid = Object.values(formData).every((value) => !!value);

    if (isFormValid) {
      // Show the pop-up if the form is valid
      setPopUpVisible(true);
      console.log("Order placed with data:", formData);
      // You may want to submit this data to a server or perform other actions
    } else {
      console.log("Please fill in all required fields");
    }
  };

  const handleCancel = () => {
    // Add logic for canceling the order or closing the form
    console.log("Order canceled");
  };
  const handlePopUpClose = () => {
    // Close the pop-up
    setPopUpVisible(false);
  };

  return (
    <div>
      {/* <SparkElement /> */}
      <h2>Ве молиме внесете ги потребните информации</h2>
      <form className={style.form}>
        {/* ... Spark element title ... */}
        {/* Checkbox for automatically filling from profile */}
        <label>
          <input
            type="checkbox"
            name="autoFillProfile"
            onChange={handleChange}
          />
          вметни ги информациите од мојот профил
        </label>

        {/* Input fields for order information */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

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
      {isPopUpVisible && (
        <div className={style.popup}>
          <div className={style.popupContent}>
            <h3>Вашата нарачка е успешна!</h3>
            <p>
              Очекувајте потврда за вашата нарачка на вашата емаил адреса. Keep
              on shining *
            </p>
            <button onClick={handlePopUpClose}>Close</button>
            <Link href="/product">
              <a>Кон почетна</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
