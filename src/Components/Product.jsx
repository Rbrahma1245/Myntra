import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import FeatureProduct from './FeatureProduct';
// import FeatureProduct from './FeatureProduct';

function Product() {

    let [products, setProducts] = useState([])
    let [isloading, setIsLoading] = useState(false);
    let [featureProductList, setFeatureProductList]= useState([])

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
        <div >
            <FeatureProduct productList={firstItemsFromEachCategory}/>
  
            {/* {
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
            } */}
        </div>
    )
}

export default Product