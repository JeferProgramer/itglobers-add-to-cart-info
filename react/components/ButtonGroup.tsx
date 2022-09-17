/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useCheckoutURL } from 'vtex.checkout-resources/Utils'

const ButtonGroup = () => {
  const { url: checkoutUrl } = useCheckoutURL()
  const CSS_HANDLES = ['containerButton', 'links', 'buttonBuy', 'linksButton']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.containerButton}>
      <div>
        <a className={handles.links} href={checkoutUrl}>
          check out
        </a>
      </div>
      <div>
        <button className={handles.buttonBuy}>
          <a className={handles.linksButton} href="/construccion">
            Continuar Comprando
          </a>
        </button>
      </div>
      <div>
        <a className={handles.links} href={checkoutUrl}>
          ver carrito
        </a>
      </div>
    </div>
  )
}

export default ButtonGroup
