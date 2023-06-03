import {
    createBrowserRouter,
    
  } from "react-router-dom";

import DashBoard from "../LayOut/DashBoard";
import Main from "../LayOut/Main";
import AddItem from "../Pages/DashBoard/Admin/AddItem";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";
import MyCart from "../Pages/DashBoard/MyCart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSignUp/LOgin";
import SignUP from "../Pages/LoginSignUp/SignUP";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders";
import AdminRoute from "./AdminRoute";
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
      element:<PrivateRoute><DashBoard/></PrivateRoute>,
      children:[
        {
          path: 'mycart',
          element: <PrivateRoute><MyCart/></PrivateRoute> 
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers/></AdminRoute> 
        }
        ,
        {
          path: 'additem',
          element:<AddItem/>
        }
      ]
    }
  ]);

  export default router;