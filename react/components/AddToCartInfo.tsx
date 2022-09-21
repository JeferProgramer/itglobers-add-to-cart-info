/* eslint-disable padding-line-between-statements */
import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import styles from './styles.css'

const AddtoCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const containerTotal = generateBlockClass(styles.containerTotal, blockClass)
  const card = generateBlockClass(styles.card, blockClass)
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  console.log('estos son mis items ', items)
  console.log('estos son mis totales ', totalizers)
  console.log('este es mi producto ', productInfo)

  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        console.log(item)
        return (
          <div key={index} className={card}>
            <div>
              <img src={item.imageUrls.at1x} alt="product" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>Id : {item.id}</p>
              <p>${item.price / 100}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div className={containerTotal}>
        <p>Total:{totalizers[0] ? totalizers[0]?.value / 100 : 0}</p>
        <ButtonGroup />
      </div>
    </div>
  )
}

export default AddtoCartInfo
