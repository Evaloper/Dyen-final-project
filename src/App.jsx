import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  Home,
  Payments,
  Billing,
  Balances,
  Customers,
  Reports,
  Products,
} from "../src/components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
