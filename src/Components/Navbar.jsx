import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { PiShoppingCartLight } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';



function Navbar() {

    let location = useLocation()
    let showSearchBar = location.pathname == '/product'




    function searchHandler(e) {
        let serchText = e.target.value
        console.log(serchText)


        // let curData = arr.filter((data) => {
        //     return data.text.includes(serchText)
        // })

        // setFilterData(curData)

    }

    let [search, setSearch] = useState(true)

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
                            <li className="nav-item" >
                                <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product" style={{ marginLeft: 10 }}>PRODUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{ marginLeft: 10 }}>ABOUT</NavLink>
                            </li>
                        </ul>

                        {
                            showSearchBar &&
                            <form style={{ marginLeft: "2rem" }}>
                                <input className="form-control me-2" style={{ width: 400 }} type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} />
                            </form>
                        }


                        <div style={{ display: 'flex', justifyContent: 'end', width: '100%' , marginRight:50}}>
                            <div className="d-flex flex-column align-items-center"  >
                                <CgProfile size={20} />
                                <p style={{ fontSize: 13 }}>PROFILE</p>

                            </div>
                            <div className="d-flex flex-column align-items-center" style={{ marginLeft: 30 }}>
                                <PiShoppingCartLight size={22} />
                                <p style={{ fontSize: 12 }}>CART</p>
                            </div>
                        </div>
                    </div>


                </div>
            </nav>


        </>
    )
}

export default Navbar