import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Favorites from './pages/Favorites';
import DownloadApp from './pages/DownloadApp';
import RegisterProfessional from './pages/RegisterProfessional';
import RegisterProfessionalContinue from './pages/RegisterProfessionalContinue';
import React from 'react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/MyAccount",
    element: <MyAccount/>,
  },
  {
    path: "/Favorites",
    element: <Favorites/>,
  },
  {
    path: "/DownloadApp",
    element: <DownloadApp/>,
  },
  {
    path: "/RegisterProfessional",
    element: <RegisterProfessional/>,
  },
  {
    path: "/RegisterProfessionalContinue",
    element: <RegisterProfessionalContinue/>,
  }
  

])

function App() {  
  return (
    <div>      
    <RouterProvider router={router} />    
    </div>
  );
}

export default App;
