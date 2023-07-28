import React from "react";
import { useNavigate } from "react-router-dom";

function MenuItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="menuItem"
      onClick={() => {
        navigate("/menu/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;