import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [totPrice, setTotPrice] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        //<p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem name={item.name} price={item.price} image= {item.image} cart = {cart} setCart={setCart} 
        totPrice = {totPrice} setTotPrice = {setTotPrice}/>
      ))}

      <div>
        <h2>Cart</h2>
        <br/>
        {/* TODO: render a list of items in the cart */}
        <div>{cart}</div>
        <div>{totPrice}</div>
        
      </div>
    </div>
  );
}

export default App;
