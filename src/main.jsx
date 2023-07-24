import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Payments, Billing, Balances, Customers, Reports, Products } from '../src/components/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/payments",
    element: <Payments />,
  },

  {
    path: "/billing",
    element: <Billing />,
  },

  {
    path: "/balances",
    element: <Balances />,
  },

  {
    path: "/customers",
    element: <Customers />,
  },

  {
    path: "/products",
    element: <Products />,
  },

  {
    path: "/reports",
    element: <Reports />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

