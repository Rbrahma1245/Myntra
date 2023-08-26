import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { APIData } from './UseContext/APIContext';
import FilterSection from './FilterSection';
import Loader from './Loader';

function Categories() {

    let { category } = useParams()

    console.log(category);


    let { products, isLoading } = useContext(APIData)

    let categories = products.filter((e) => e.category == category)

    if (isLoading) return <Loader />



    return (
        <div style={{ marginTop: 30 }} >
             <NavLink style={{marginLeft:50}} to="/" > Back</NavLink>
        <div className='d-flex '>
            <FilterSection  />           

            <div className='row ' style={{ marginTop: 10, justifyContent: 'center' }}>
                {
                    categories.map((elem, i) => {
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

export default Categories