import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import router from './Routes/Router.jsx'
import Authprovider from './Provider/Authprovider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

               <Authprovider>

     <HelmetProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
     </HelmetProvider>

                   </Authprovider>

  </React.StrictMode>,
)
