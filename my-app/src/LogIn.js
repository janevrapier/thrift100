import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate();

  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
      <h2 className = 'welcomeHeading'>
        secure, campus-based online reselling
        </h2>
        <h1 className="mainTitle">THRFT100</h1>
        <div>Enter your university email address</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="name@queensu.ca "
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'button'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>

      <input className={'homeButton'} type="button" onClick={() => {navigate('/')}} value="Home" />
    </div>
  )
}

export default Login