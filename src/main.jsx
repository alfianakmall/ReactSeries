import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductsPage from './Pages/Products'

const router = createBrowserRouter([
  {
    path  : '/',
    element: <div className="flex justify-center min-h-screen items-center">Hello World</div>,
    errorElement: <ErrorPage/>
  },
  {
    path  : '/login',
    element: <LoginPage/>
  },
  {
    path  : '/products',
    element: <ProductsPage/>
  },
  {
    path  : '/register',
    element: <RegisterPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
