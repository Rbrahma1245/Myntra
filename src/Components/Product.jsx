import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';

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
        <div className='row' style={{marginTop:50}}>
            {
                products.map((elem, i) => {
                    let { id, title, price, image, description } = elem
                    return (
                       
                            <div className="col-sm-4 " key={i} >
                                <div className="card">
                                    <img src={image} width={200} height={200}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$ {price}</h6>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                          

                    )
                })
            }
        </div>
    )
}

export default Product