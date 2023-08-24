import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import APIContext from "./Components/UseContext/APIContext";
import SingleProduct from "./Components/SingleProduct";


function App() {

  return (
    <>
      <APIContext>
        <BrowserRouter >
          <Navbar />

          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/about' element={< About />} />
            <Route path='/product' element={< Product />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
          </Routes>


        </BrowserRouter>
      </APIContext>

    </>
  )
}

export default App
