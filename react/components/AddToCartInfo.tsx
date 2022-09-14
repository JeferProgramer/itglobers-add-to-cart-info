import React from "react"
import {useProduct} from"vtex.product-context"

const AddToCartInfo = () => {
  const productInfo = useProduct()
  console.log("Este producto tiene esta info: ",productInfo)
  return(
    <div>Aqui renderizamos nuestra informacion</div>
  )
}


export default AddToCartInfo
