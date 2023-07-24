import React from 'react';
import ReactDOM from 'react-dom/client';
import { Billing } from './components/pages/Billing';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from './components/pages/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
