import React, { ReactElement } from "react";
import './ProductCard.css'

interface Props{
    name:string
    price:Number
    imageUrl:string
}

const productCard = ({name, price, imageUrl}:Props):React.JSX.Element =>{
    return <div className="productCard">
        <img className = 'productImage' src = {imageUrl}/>
        <h2>{name}: {price.toString()}$</h2>
        </div>;
}

export default productCard;