import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from "context/auth/AuthContext";

import './Login.scss';

const Login: React.FC = () => {

  const _navigate = useNavigate();
  const _auth = React.useContext(AuthContext);
  const _location = useLocation();

  const _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let email = formData.get("user.email") as string;

    _auth.SignIn(email, () => {
      const locationState = _location.state as any;
      _navigate(locationState?.from?.pathname || '/Dashboard', { replace: true });
    });

  };

  return (
    <section className="Login">
      <div className="card">
        <h2 className="title">Bora Mochilar</h2>
        <h2 className="brand-title">Login</h2>

        <form onSubmit={_handleSubmit}>
          
          <div className="form-box">
            <span>E-mail</span>
            <div className="content-form-box">
              <FontAwesomeIcon icon={faUser} color="#a64bf4" />
              <input type='email' name="user.email" placeholder="Informe seu e-mail" />
              <div className="bar" />
            </div>
          </div>

          <div className="form-box">
            <span>Senha</span>
            <div className="content-form-box">
              <FontAwesomeIcon icon={faLock} color="#a64bf4" />
              <input type='password' name='user.password' placeholder="Informe sua senha" />
              <div className="bar" />
            </div>
          </div>

          <button className="btn-forget-pwd">Esqueci a senha</button>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button type="submit" className="login100-form-btn">
               Login
              </button>
            </div>
          </div>

        </form>

      </div>
    </section>
  );
};

export default Login;