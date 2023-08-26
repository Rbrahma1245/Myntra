import React, { useContext, useState } from 'react'
import { APIData } from './UseContext/APIContext';
import Loader from './Loader';
import FilterSection from './FilterSection';
import Card from './Card';


function Product() {

    let { products, isLoading } = useContext(APIData)

    let [form, setForm] = useState({
        price: '',
    })


    if (isLoading) return <Loader />

    if (form.price == 'Low to High') products.sort((a, b) => a.price - b.price);
    if (form.price == 'High to Low') products.sort((a, b) => b.price - a.price);


    return (
        <div style={{ marginTop: 30 }} >
            <div className='d-flex '>
                <FilterSection setForm={setForm} />

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