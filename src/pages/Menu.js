import React from "react";
import MenuItem from "../components/MenuItem";
import { MenuList as HelperMenuList } from "../helpers/MenuList"; 
import "../styles/Menu.css";

function MenuDisplay() {
  return (
    <div className="Menu">
      <h1> Look at Our Delicious Menu Items</h1>
      <div className="MenuList">
        {HelperMenuList.map((menu, idx) => { 
          return (
            <MenuItem key={idx} name={menu.name} image={menu.image} />
          );
        })}
      </div>
    </div>
  );
}

export default MenuDisplay;
