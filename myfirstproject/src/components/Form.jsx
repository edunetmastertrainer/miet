import React, { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("BOB");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            className="form-control"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>

      <h1>Hello, {inputValue}!</h1>
    </div>
  );
}
