import React, {useEffect, useState} from 'react'
//En una sola línea como arriba, separado por coma o como lo va haciendo automaticamente VSC abajo:
//import { useEffect } from 'react'
//import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

//En este container se obtienen los datos de un producto específico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    //otra manera de ver el error hacerlo con Estado
    const [error, setError]= useState("")
    
    //obtenemos la informaión
    useEffect(()=>{
        const getProductos = async () => {
            try {
                //seteamos la respuesta del servidor
               const response = await fetch('https://fakestoreapi.com/products/1')
               //obtenemos los datos
               const data = await response.json();
               setProductDetail(data)
            } catch (error) {
                console.log(error)
                setError(error.message)
            }

        }
        getProductos();

    }, [])

  return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer