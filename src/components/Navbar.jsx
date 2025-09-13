import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-center'>
        <nav>
            <Link to="/" className='btn btn-dark m-3'>Inicio</Link>
            <Link to="/contacto" className='btn btn-dark m-3'>Contacto</Link>
            <Link to="/productos" className='btn btn-dark m-3'>Productos</Link>
        </nav>
    </div>
  )
}

export default Navbar