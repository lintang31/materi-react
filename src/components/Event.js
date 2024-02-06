import React from "react";

function Event() {
  const handleClick = () => {
    alert("berhasil!!!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default Event;
