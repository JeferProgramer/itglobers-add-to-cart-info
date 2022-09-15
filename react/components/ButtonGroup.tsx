import React from "react";
import {useCheckoutURL} from "vtex.checkout-resources/utils";
const ButtonGroup = () => {
  return(
    <>
      <div>
        <a href="/">CHECK OUT</a>
      </div>
      <div>
        <button>CONTINUA COMPRANDO</button>
        <a href="/">VER CARRITO</a>
      </div>
    </>
  )
}
export default ButtonGroup
