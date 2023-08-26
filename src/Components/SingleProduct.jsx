import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { APIData } from './UseContext/APIContext';
import Loader from './Loader';


function SingleProduct() {

    const { productId } = useParams();
    let { products, isLoading } = useContext(APIData)

    let singleProduct = products.find((e) => e.id == productId)

    if (isLoading) return <Loader />

    return (
        <div  >
            <NavLink style={{ marginLeft: 50 }} to="/product" > Back</NavLink>
            <div className="card " style={{ height: 400, alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: "30%", textAlign: "center" }}>
                    <img src={singleProduct?.image} width={200} height={200} />
                </div>

                <div className="card-body">
                    <h6 className="card-title">{singleProduct?.title}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">$ {singleProduct?.price}</h6>
                    <p>{singleProduct?.description}</p>
                    <br />

                </div>
            </div>
        </div>
    )
}

export default SingleProduct