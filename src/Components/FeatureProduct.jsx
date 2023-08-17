import React from 'react'

function FeatureProduct({ productList }) {
    return (
        <div className='row' style={{ marginTop: 50, justifyContent: 'center' }}>
            <h5>SHOP BY CATEGORY</h5>

            {
                productList?.map((elem, i) => {
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