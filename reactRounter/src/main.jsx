/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,Route
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './compoents/Home/Home.jsx';
import Header from './compoents/Header/Header.jsx';
import Footer from './compoents/Footer/Footer.jsx';
import About from './compoents/About/About.jsx';
import Contact from './compoents/Contact/Contact.jsx';
import User from './compoents/User/User.jsx';
import Github, { githubInfoLoder } from './compoents/GitHub/Github.jsx';
// This is a 1st way to use router but this approch is little bit complex thats why we always prefer to use 2nd way
// const router = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         }
//         ,
//         {
//           path:"About",
//           element:<About/>
//         },
//         {
//           path:"Contact",
//           element:<Contact/>
//         }
//       ]
//     }
//   ]
// )

// *! This is a 2nd way

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/userid" element={<User />} />
      <Route 
      loader={githubInfoLoder}
      path="Github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
