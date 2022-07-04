import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {

    const getProductos = async() =>{
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json()
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error: ");
        console.log(error);
        
      }
    }
    getProductos()

  }, [])

  console.log(productos);

  const handleAdd = (count) => {
    console.log(`Se agrego al carrito ${count} productos`);
  }
  console.log(productos);

  return (
    <div>
        <p>{greeting}</p>
        <ItemCount handleAdd={handleAdd} initialStock={10}/>
        {productos ?
        <ItemList products={productos} />
        :
        <p>Loading...</p>
        }
        
    </div>
  )
}

export default ItemListContainer