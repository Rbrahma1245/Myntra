import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { APIData } from './UseContext/APIContext';
import FilterSection from './FilterSection';
import Loader from './Loader';
import Card from './Card';

function Categories() {

    let { category } = useParams()
    let { products, isLoading } = useContext(APIData)

    let categories = products.filter((e) => e.category == category)

    if (isLoading) return <Loader />


    return (
        <div style={{ marginTop: 30 }} >
            <NavLink style={{ marginLeft: 50 }} to="/" > Back</NavLink>
            <div className='d-flex '>
                <FilterSection />

                <div className='row ' style={{ marginTop: 10, justifyContent: 'center' }}>
                    
                    {
                        categories.map((elem, i) => <Card elem={elem} key={elem.id} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Categories