import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';

function FeatureProduct() {


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



    function getFirstItemFromEachCategory(array) {
        const firstItems = {};
      
        return array.reduce((accumulator, item) => {    
          const category = item.category;
      
          if (!firstItems[category]) {
            firstItems[category] = true;
            accumulator.push(item);
          }
      
          return accumulator;
        }, []);
      }
      
      
      const firstItemsFromEachCategory = getFirstItemFromEachCategory(products);
      console.log(firstItemsFromEachCategory);
      




    return (
        <div className='row' style={{ marginTop: 50, justifyContent: 'center' }}>
            <h5>SHOP BY CATEGORY</h5>

            {
                firstItemsFromEachCategory.map((elem, i) => {
                    let { id, title, price, image , category} = elem

                    return (

                        <div style={{ width: 300, marginBottom: 50, marginTop:20 }} key={i} >
                            <div className="card" style={{ height: 400, alignItems: 'center' }}>
                                <img src={image} width={200} height={200} style={{ marginTop: 10 }} />
                                <div className="card-body">
                                    <h6 className="card-title">{category}</h6>
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
    )
}

export default FeatureProduct