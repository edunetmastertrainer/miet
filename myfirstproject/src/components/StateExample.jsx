import React, { useState, useEffect } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <p>count : {count}</p>
      <button onClick={handleCount}>Click </button>
    </>
  );
}
