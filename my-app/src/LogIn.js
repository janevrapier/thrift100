import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import ComingSoon from './coming_soon';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const onContinueClick = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!email.endsWith('@queensu.ca')) {
      setEmailError('Please enter a valid university email ending with @queensu.ca');
    } else {
      setEmailError('');
    }
  
    // If validation passes, navigate to the next page
    if (email.endsWith('.queensu.ca')) {
      navigate('/coming_soon'); 
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <h2 className='welcomeHeading'>secure, campus-based online reselling</h2>
        <h1 className="mainTitle">THRFT 100</h1>
        <div className="emailMessage">Enter your university email address</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="name@queensu.ca"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        
      </div>
      <br />
      <div className={'errorContainer'}>
        <label className="errorLabel">{emailError}</label>
      </div>

      <input className={'continueButton'} type="button" onClick={onContinueClick} value="Continue" />
    </div>
  );
};

export default Login;
