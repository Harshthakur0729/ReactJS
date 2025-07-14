import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from '../src/page/Home'
import FetchOld from '../src/page/FetchOld'
import FetchRQ from '../src/page/FetchRQ'
import MainLayout from '../src/Layout/MainLayout'
import ErrorHandle from './Layout/errorHandle'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorHandle/>,

      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/trad",
          element: <FetchOld />
        },

        {
          path: "/rq",
          element: <FetchRQ />
        }
      ]
  }
])


const app = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default app