import React from "react";
import "./Button.css"


 const Button = ({ displayName, onClick, bg, color }) => {
  return (
    <button className="btn__button" 
    onClick={onClick} 
    style= {{backgroundColor: bg, color: color}}>
        {displayName}

    </button>
  )
}
export default Button