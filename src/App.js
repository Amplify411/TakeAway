import React,{useState,useEffect} from'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './paths/Signup';
import Login from './paths/Login';
import Home from './paths/Home';
import Cart from './paths/Cart';
import Checkout from './paths/Checkout';
import "./cssFiles/app.css"
function App() {
  const router = createBrowserRouter([
    { path: '/',element: <Login />},
    { path: '/login',element: <Login />},
    { path: '/signup', element: <Signup />},
    { path: '/home', element: <Home />},
    { path: '/cart', element: <Cart />},
    { path: '/checkout', element: <Checkout />}, 

  ]);
  
  return (

    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
