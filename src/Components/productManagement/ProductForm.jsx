import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);
    // validation
    if (name.length === 0) {
      setError("Please provide a product name");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price");
      return;
    } else if (price < 0) {
      setError("Price can't be zero");
      return;
    } else {
      setError("");
    }
    const newProduct = {
      name,
      price,
      quantity,
    };
    if (!error) {
      handleAddProduct(newProduct);
    }
  };

  return (
    <div>
      <h3>Add a Product</h3>
      <form action="" onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <br />
        <input type="text" name="quantity" placeholder="Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ProductForm;
