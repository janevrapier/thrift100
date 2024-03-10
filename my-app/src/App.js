import React from 'react';
import backgroundImage from './THRFT.jpg';
import './App.css';
import LoginPage from './LogIn.js'
import { createBrowserRouter, RouterProvider, Link, useNavigate } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Welcome to THRFT100! <br></br>
        Your new home for thrifting on campus! <br></br>
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </div>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

