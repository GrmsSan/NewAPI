import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Req from './Req.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/Req",
    element: <Req />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)