import React from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import "../styles/MenuDisplay.css";

function MenuDisplay() {
  const { id } = useParams();
  const menu = MenuList[id];
  return (
    <div className="Menu">
      <h1> {menu.name}</h1>
      <img src={menu.image} />
      <p>
        <b>Description:</b> {menu.description}
      </p>
    </div>
  );
}

export default MenuDisplay;