import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Navbar from './Navbar';

function Product() {

    let [products, setProducts] = useState([])
    let [isloading, setIsLoading] = useState(false);

    const fetchProduct = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setProducts(data)
            console.log(data)

        }
        catch (error) {
            console.log(error)
        }
        setIsLoading(false);

    }


    useEffect(() => {
        fetchProduct()
    }, [])

    if (isloading) return <Loader />




    return (
        <div style={{marginTop:30}} >
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