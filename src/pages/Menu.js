import React from "react";
import { MenuList } from "../helpers/MenuList"; // Adjust the path as necessary
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"; // Adjust the path as necessary
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
