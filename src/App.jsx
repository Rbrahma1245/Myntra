import { useState } from 'react'

// import Home from './Components/Home'

import { RouterProvider } from "react-router-dom";

import router from './RouteConstants'


function App() {




  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
