import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { PiShoppingCartLight } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';



function Navbar({setSearch}) {

    let location = useLocation()
    let showSearchBar = location.pathname == '/product'


    function searchHandler(e) {
        let searchText = e.target.value
        setSearch(searchText)

    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ marginLeft: 10 }}>RB STORE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <NavLink className="nav-link active" aria-current="page" to="/" style={{ marginLeft: 10 }}>HOME</NavLink>
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
                            <form className='smml' style={{ marginLeft: "2rem"}}>
                                <input className="form-control me-2 " style={{ width: '16rem' }} type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} />
                            </form>
                        }


                        <div className='smcol' style={{ display: 'flex', justifyContent: 'end', width: '100%' , marginRight:50}}>
                            <div className="d-flex flex-column "  style={{alignItems:'center'}} >
                                <CgProfile size={20} />
                                <p style={{ fontSize: 13, alignItems:'center' }}>PROFILE</p>

                            </div>
                            <div className="d-flex flex-column sm-tt" style={{ marginLeft: 30, alignItems:'center' }}>
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