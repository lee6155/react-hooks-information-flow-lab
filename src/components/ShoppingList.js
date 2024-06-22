import React, {useState} from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList() {
  function onCategoryChange(itemsToDisplay) {
    return (
      <div className="ShoppingList">
        <Filter onCategoryChange={onCategoryChange}/>
          <ul className="Items">
            {itemsToDisplay.map((item) => (<Item key={item.id} name={item.name} category={item.category} />
            ))}
          </ul>
      </div>
    );
  }
return null
}

export default ShoppingList;
