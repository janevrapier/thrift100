import React from 'react';
import './App.css';
import LoginPage from './LogIn.js'
import ComingSoon from './coming_soon.js';
import { createBrowserRouter, RouterProvider, Link, useNavigate } from 'react-router-dom';


const router = createBrowserRouter([
{
  path: '/',
  
  element: (
    <div className="main_container">
  <div className="content">
    <div className="slogan">secure, campus-based online reselling</div>
    <div className="thrift-heading">THRFT</div>
    <div className="hundred-heading">100</div>
    <Link to="/login">
      <button className="button">Claim your secure account now</button>
    </Link>
  </div>

  {/* Right side graphics */}
  <div className="graphics-container">
    <div className="feature">
      <img src="./mapPin.png" alt="Map Pin" />
      <p>Choose from a variety of secure, public locations on campus</p>
    </div>

    <div className="feature">
      <img src="./star.png" alt="Star" />
      <p>See your seller’s history & reviews from fellow students</p>
    </div>

    <div className="feature">
      <img src="./globe.png" alt="Globe" />
      <p>Promote a circular economy and reduce the carbon footprint of the fashion industry</p>
    </div>
  </div>
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

