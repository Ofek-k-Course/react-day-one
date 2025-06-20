import React, { ReactElement } from "react";
import './productCard.css'

interface Props{
    name:string
    price:Number
    imageUrl:string
}

const productCard = ({name, price, imageUrl}:Props):React.JSX.Element =>{
    return <div className="productCard">
        <img src = {imageUrl} alt = 'new'/>
        <h2>{name}: {price.toString()}$</h2>
        </div>

}