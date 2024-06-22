import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header.js"
import Filter from "./Filter"

function App() {

  function onDarkModeClick(isDarkMode) {
    return isDarkMode
  }

  return (
    <div>
      <Header onDarkModeClick={onDarkModeClick}/>
      <ShoppingList items={itemData}/>
    </div>
  )
}

export default App;
