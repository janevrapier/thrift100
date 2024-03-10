import React from 'react';
import backgroundImage from './THRFT.jpg';
import './App.css';
import LoginPage from './LogIn.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  { useNavigate } from 'react-router-dom'
// test

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!<button onClick={() => {
       // Redirect to the dashboard after login
    }}>Hello</button></div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

