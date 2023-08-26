import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import APIContext from "./Components/UseContext/APIContext";
import SingleProduct from "./Components/SingleProduct";
import Categories from "./Components/Categories";
import { useState } from "react";


function App() {

  let [search, setSearch]= useState('')

  return (
    <>
      <APIContext>
        <BrowserRouter >
          <Navbar setSearch={setSearch}/>

          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/about' element={< About />} />
            <Route path='/product' element={< Product search={search}/>} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/:category" element={<Categories />} />
          </Routes>


        </BrowserRouter>
      </APIContext>

    </>
  )
}

export default App
