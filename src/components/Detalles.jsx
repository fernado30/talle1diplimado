import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const Detalles = () => {
    const {id}=useParams()
    const [producto,setProducto]=React.useState([])
    React.useEffect(()=>{
        obtenerProducto()
    },[])
    const obtenerProducto=async()=>{
       
        const datos=await fetch(`https://fakestoreapi.com/products/${id}`)
        const prod=await datos.json()
        setProducto(prod)
    }
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
        {
            <Card id={producto.id} title={producto.title} description={producto.description}
            price={producto.price} image={producto.image}
            />
        }
    </div>
  )
}

export default Detalles