import React, { createContext, useEffect, useState } from 'react'
import Loader from '../Loader';
import axios from 'axios';

export let APIData = createContext()

function APIContext({ children }) {

    let [products, setProducts] = useState([])
    let [isLoading, setIsLoading] = useState(false);

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






    return (
        <APIData.Provider value={{products, isLoading}}>
            {children}
        </APIData.Provider>
    )
}

export default APIContext