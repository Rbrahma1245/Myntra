import React, { useContext } from 'react'
import { APIData } from './UseContext/APIContext';
import Loader from './Loader';
import FilterSection from './FilterSection';
import Card from './Card';


function Product() {

    let { products, isLoading } = useContext(APIData)
    if (isLoading) return <Loader />


    return (
        <div style={{ marginTop: 30 }} >
            <div className='d-flex '>
                <FilterSection />

                <div className='row ' style={{ marginTop: 10, justifyContent: 'center' }}>

                    {
                        products.map((elem, i) => <Card elem={elem} key={elem.id} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Product