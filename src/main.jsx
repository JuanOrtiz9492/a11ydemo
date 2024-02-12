import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ButtonDemo from './demos/button/index.jsx'
import LinkDemo from './demos/links/index.jsx'
import DropdownDemo from './demos/dropdown/index.jsx'
import Raiting from './demos/raiting/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/button',
        element: <ButtonDemo />
      },
      {
        path:'/link',
        element: <LinkDemo />
      },
      {
        path:'/dropdown',
        element: <DropdownDemo />
      },
      {
        path:'/raiting',
        element: <Raiting />
      }
    ]
  }
], {
  basename: '/a11ydemo'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
