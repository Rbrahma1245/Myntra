import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";


function App() {

  return (
    <>
      <BrowserRouter >
        <Navbar />

        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/product' element={< Product />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
