import React from "react";
import { Navigate } from "react-router-dom";


const Home = React.lazy(()=>import("../views/home"))

const routes=[
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:"/home",
    element:<Home/>,
  }
]

export default routes;