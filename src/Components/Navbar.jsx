import React from 'react'

function Navbar() {

    function searchHandler(e) {
        let serchText = e.target.value
        console.log(serchText)

        
        // let curData = arr.filter((data) => {
        //     return data.text.includes(serchText)
        // })

        // setFilterData(curData)

    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PRODUCTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>

                        </ul>

                        <form >
                            <input className="form-control me-2" style={{ width: 400 }} type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} />
                        </form>

                        <div style={{ display: 'flex', justifyContent: 'end', width: '50%' }}>
                            <div >
                                LOGIN
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                CART
                            </div>
                        </div>
                    </div>


                </div>
            </nav>


        </>
    )
}

export default Navbar