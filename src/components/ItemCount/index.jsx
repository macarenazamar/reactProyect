import React, {useState} from 'react'

const ItemCount = ({handleAdd, initialStock}) => {
    const [count, setCount] = useState (0);
    const onAdd = () => {
      setCount(count + 1);
    }
    const onDecrement = () => {
      setCount(count - 1);

    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={onAdd}>+</button>
        <button onClick={onDecrement}>-</button>
        <p>Cantidad de prodctos: {count}</p>
        <button onClick={handelAdd}>Agregar al carrito</button>
        </div>
  )
}

export default ItemCount