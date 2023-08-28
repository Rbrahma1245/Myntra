import React, { useContext, useState } from 'react'
import { APIData } from './UseContext/APIContext';
import Loader from './Loader';
import FilterSection from './FilterSection';
import Card from './Card';


function Product({search}) {

    let { products, isLoading } = useContext(APIData)

    let [form, setForm] = useState({
        price: '',
        gender:''
    })


    console.log(form, 'from form');

    if (form.price == 'Low to High') products.sort((a, b) => a.price - b.price);
    if (form.price == 'High to Low') products.sort((a, b) => b.price - a.price);


    let filterProducts = products.filter((elem)=> elem.title.toLowerCase().includes(search))

    if (isLoading) return <Loader />

    return (
        <div style={{ marginTop: 30 }} >
            <div className='d-flex '>
                <FilterSection setForm={setForm} />

                <div className='row ' style={{ marginTop: 10, justifyContent: 'center' }}>

                    {
                        filterProducts.map((elem, i) => <Card elem={elem} key={elem.id} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Product