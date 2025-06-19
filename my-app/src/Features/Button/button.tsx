import React, { ReactElement } from 'react';


interface Props{
    label:string
    color:string
}

const button = ({label, color}:Props):ReactElement =>{
    return <button color = {color} >{label}</button>
}

export default button;