import React from "react";

function Products({ name, imagePath }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
        style={{ width: "75%" }}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }} htmlFor={name}>
          {name}
        </label>
        <input
          type="number"
          name="quantity"
          id={name}
          min="0"
          style={{ marginLeft: 7 }}
        />
      </form>
    </div>
  );
}

export default Products;
