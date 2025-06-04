import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h1 className="menuItemTitle">{name}</h1>
      <p className="menuItemPrice">${price}</p>
    </div>
  );
}

export default MenuItem;
