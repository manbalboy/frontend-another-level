import React from "react";

function Options({ name }) {
  return (
    <form>
      <input type="checkbox" id={`${name}`} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
}

export default Options;
