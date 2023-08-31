import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ elem }) {
    let { id, title, price, image } = elem

    return (
        <div className='smcol'  style={{ width: 400, marginBottom: 50 }}  >
            <div className="card" style={{ height: 400, alignItems: 'center' }}>
                <img src={image} width={200} height={200} />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">$ {price}</h6>
                    <br />
                    <NavLink to={`/product/${id}`} className="btn btn-primary">View Details</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card