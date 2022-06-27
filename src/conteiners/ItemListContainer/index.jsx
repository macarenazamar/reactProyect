import React, {useState} from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {
  const handleAdd = () => {
    console.log("Se agrego al carrito");
  }
  return (
    <div>
        <p>{greeting}</p>
        <ItemCount handleAdd={handleAdd} initialStock={10}/>
    </div>
  )
}

export default ItemListContainer