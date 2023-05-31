import {
    createBrowserRouter,
    
  } from "react-router-dom";

import DashBoard from "../LayOut/DashBoard";
import Main from "../LayOut/Main";
import MyCart from "../Pages/DashBoard/MyCart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSignUp/LOgin";
import SignUP from "../Pages/LoginSignUp/SignUP";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders";
import PrivateRoute from "./PrivateRoute";
  
  
  


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/menu',
            element: <Menu/>
        },
        
        {
            path:'/login',
            element: <Login/>
        },
        
        {
            path:'/signup',
            element: <SignUP/>
        },
        
      
        {
          path:'/order/:category',
          element:  <Orders/>
      }

      ],
    },
    {
      path:'dashboard',
      element:<DashBoard/>,
      children:[
        {
          path: 'mycart',
          element:<MyCart/>
        }
      ]
    }
  ]);

  export default router;