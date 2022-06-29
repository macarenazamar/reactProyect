import React, {useState} from 'react'

const ItemCount = ({handleAdd, initialStock}) => {
    const [count, setCount] = useState (0);
    //Agregamos stock
    let stock = 10;
    const onAdd = () => {
      if (count < stock){
        setCount(count + 1);
      } else {
        alert ("No hay mas stock");
      }
    }
    const onDecrement = () => {
      if (count >= 1){
        setCount(count - 1);
      }
    }
    //quiero que al apretar el boton agrear al carrito me redirija a la pagína donde voy a tener todo el carrito de compra, es decir, las compras pre seleccionadas, lo vemos a esto más adelante?
  return (
    <div>
        <p>{count}</p>
        <button onClick={onDecrement}>-</button>
        <button>Agregar al carrito</button>
        <button onClick={onAdd}>+</button>
        
        
        <p>Cantidad de prodctos: {count}</p>
        </div>
  )
}

export default ItemCount