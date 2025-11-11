
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import ShopNow from './Components/ShopNow/ShopNow';
import SingleProductPage from './Components/SingleProduct/SingleProduct';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import { FilterProvider } from './Components/Context/FilterContext';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/shop",
        Component:ShopNow
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"/blog",
        Component:Blog
      },
      {
        path:"/contact",
        Component:Contact
      },
      {
        path:"/shopNow/:id",
        Component:SingleProductPage
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  
   <FilterProvider>
     <RouterProvider router={router} />
   </FilterProvider>
  
);


