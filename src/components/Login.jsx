import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleLogin}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input 
                type="text" 
                className="login__input" 
                placeholder="User name / Email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input 
                type="password" 
                className="login__input" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>				
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>		
      </div>
    </div>
  );
}

export default Login;