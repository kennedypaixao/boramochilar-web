import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import './Login.scss';

const Login: React.FC = () => {
  return (
    <section className="Login">
      <div className="card">
        <h2 className="title">Bora Mochilar</h2>
        <h2 className="brand-title">Login</h2>

        <form>
          <div className="form-box">
            <span>E-mail</span>
            <div className="content-form-box">
              <FontAwesomeIcon icon={faUser} color="#a64bf4" />
              <input type='text' placeholder="Informe seu e-mail" />
              <div className="bar" />
            </div>
          </div>
          <div className="form-box">
            <span>Senha</span>
            <div className="content-form-box">
              <FontAwesomeIcon icon={faLock} color="#a64bf4" />
              <input type='password' placeholder="Informe sua senha" />
              <div className="bar" />
            </div>
          </div>
          <button className="btn-forget-pwd">Esqueci a senha</button>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button className="login100-form-btn">
               Login
              </button>
            </div>
          </div>

        </form>

      </div>
    </section>
  )
}

export default Login;