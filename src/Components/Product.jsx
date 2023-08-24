import React, { useContext } from 'react'
import { APIData } from './UseContext/APIContext';
import Loader from './Loader';


function Product() {

    let { products, isLoading } = useContext(APIData)

    if (isLoading) return <Loader />


    return (
        <div style={{ marginTop: 30 }} >
            <h6>ALL PRODUCT LIST</h6>

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
                                        <a href="#" className="btn btn-primary">Add to card</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Product