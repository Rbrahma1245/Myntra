import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About';
import Product from './Components/Product';



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/product",
      element: <Product />
    },
    {
      path:"/about",
      element: <About />
    },

  ]);

  export default router;
