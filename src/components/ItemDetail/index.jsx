import React from 'react'

//va a contener todos los datos del producto
const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image}/>
      <p>{product.descrption}</p>
    </div>
  )
}

export default ItemDetail