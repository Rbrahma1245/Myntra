import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { APIData } from './UseContext/APIContext';

function FinalCard() {

    const { productId } = useParams();
    let { products, isLoading } = useContext(APIData)

    
    let [cardList, setCardList] = useState([])

    let singleProduct = products.find((e) => e.id == productId)






// console.log(cardList, 'cardlist');


    return (
        <div>

            <h2> HERE NEED TO DISPLAY CARD  </h2>

            <h3>Price is : {singleProduct?.price}</h3>
            <button onClick={()=> console.log(cardList, 'crom button')}>hhh</button>
        </div>
    )
}

export default FinalCard