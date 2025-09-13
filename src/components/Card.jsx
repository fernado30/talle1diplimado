import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,title,price,image}) => {
  return (
    <div className='d-flex d-flex-row mb-3'>
        <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width:'20rem',margin:'10px'}}>
            <img src={image} className='img-fluid' />
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className='card-title'>{title}</h5>
                <h3>{price}</h3>
                <Link to={`/productos/${id}`} className='btn btn-primary'>Detalles</Link>
            </div>
        </div>

    </div>
  )
}

export default Card