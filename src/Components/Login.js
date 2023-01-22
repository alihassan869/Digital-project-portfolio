import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import axios from 'axios';
import img from '../assests/images/signin-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
const FaLock = <FontAwesomeIcon icon={faLock} />;
// const FaGoogle = <FontAwesomeIcon icon={faGoogle} />;
// const FaGithub = <FontAwesomeIcon icon={faGithub} />;
const FaMessage = <FontAwesomeIcon icon={faMessage} />;
function Login({ SetuserLogin }) {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
    password: '',
    Checkbox: false,
  });
  const handladata = (e) => {
    const { name, value } = e.target;

    if (name === 'Checkbox') {
      setuser({
        ...user,
        [name]: e.target.checked,
      });
    } else {
      setuser({
        ...user,
        [name]: value,
      });
    }
  };
  const Login = (e) => {
    e.preventDefault();
    const { email, password, Checkbox } = user;
    if (email && password && Checkbox) {
      axios.post('http://localhost:250/Login', user).then((res) => {
        alert(res.data.message);
        SetuserLogin(res.data.user);
        navigate('/');
      });
    }
  };
  return (
    <>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={img} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 shadow-lg Login-form px-4 pt-5">
            <Form>
              <h6 className="text-center mt-5" style={{ color: '#5f1782' }}>
                Or sign in with credentials
              </h6>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <div className="input-box d-flex  ">
                  <div className="icon">{FaMessage}</div>
                  <input
                    type="email"
                    placeholder=" Email "
                    className="input"
                    required
                    name="email"
                    value={user.email}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3  " controlId="formBasicPassword">
                <div className="input-box d-flex ">
                  <div className="icon">{FaLock}</div>
                  <input
                    type="password"
                    placeholder="Password"
                    className=" input"
                    required
                    name="password"
                    value={user.password}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group className="my-4" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  required
                  name="Checkbox"
                  value={user.Checkbox}
                  onChange={handladata}
                />
              </Form.Group>

              <Button
                type="submit"
                className="sign-btn w-100 "
                style={{
                  background: '#5f1782',
                  border: 'none',
                  borderRadius: '10px',
                }}
                onClick={Login}
              >
                LOGIN
              </Button>
            </Form>
            <div className="container d-flex justify-content-between py-2">
              <Link
                to="/Forgetemail"
                className="text-decoration-none"
                style={{ color: '#5f1782' }}
              >
                Forget Password?
              </Link>
              <Link
                to="/Register"
                className="text-decoration-none"
                style={{ color: '#5f1782' }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
