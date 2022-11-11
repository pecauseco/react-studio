// TODO: create a component that displays a single bakery item
import { useState } from 'react';

export default function BakeryItem(props){
    const totPrice = props.totPrice;
    const setTotPrice = props.setTotPrice;
const name = props.name;
const price = props.price;
const image = props.image;
const cart = props.cart;
const setCart = props.setCart;
const total = props.total;
const setTotal = props.setTotal;
const [index, setIndex] = useState(0);
function handleNextClick() {
    setTotPrice(totPrice + price);
    setCart([...cart, name, " ", price, " ", <br/>]);
    
    setIndex(index + 1);
  }
    return (
        <div>
        <div>{name} {price} </div>
        <img src = {image}/>
        <button onClick={handleNextClick}>Add to cart</button>
        </div>
    )
}