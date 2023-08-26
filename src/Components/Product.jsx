import React, { useContext, useState } from 'react'
import { APIData } from './UseContext/APIContext';
import Loader from './Loader';
import FilterSection from './FilterSection';

import { NavLink} from 'react-router-dom'


function Product() {

    let { products, isLoading } = useContext(APIData)
    if (isLoading) return <Loader />


    return (
        <div style={{ marginTop: 30 }} >
            <div className='d-flex '>
                <FilterSection  />           

                <div className='row ' style={{ marginTop: 10, justifyContent: 'center' }}>
                    {
                        products.map((elem, i) => {
                            let { id, title, price, image } = elem

                            return (

                                <div style={{ width: 400, marginBottom: 50 }} key={i} >
                                    <div className="card" style={{ height: 400, alignItems: 'center' }}>
                                        <img src={image} width={200} height={200} />
                                        <div className="card-body">
                                            <h6 className="card-title">{title}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">$ {price}</h6>
                                            <br />
                                            <NavLink to={`/product/${id}`} className="btn btn-primary">Add to card</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Product