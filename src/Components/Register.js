import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../assests/images/signup-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const FaLock = <FontAwesomeIcon icon={faLock} />;
// const FaGoogle = <FontAwesomeIcon icon={faGoogle} />;
// const FaGithub = <FontAwesomeIcon icon={faGithub} />;
const FaUser = <FontAwesomeIcon icon={faUser} />;
const FaMessage = <FontAwesomeIcon icon={faMessage} />;

function Register() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    Cpassword: '',
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

  const Register = (e) => {
    e.preventDefault();
    const { name, email, password, Cpassword, Checkbox } = user;
    if (name && email && password && password === Cpassword && Checkbox) {
      axios.post('http://localhost:250/Register', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    }
  };
  return (
    <>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 shadow-lg Register-form px-4 py-5 ">
            <Form>
              <h6 className="text-center" style={{ color: '#5f1782' }}>
                Or sign up with credentials
              </h6>
              <Form.Group className="mb-3">
                <div className="input-box d-flex ">
                  <div className="icon">{FaUser}</div>
                  <input
                    type="text"
                    placeholder="Name"
                    className=" input"
                    required
                    name="name"
                    value={user.name}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
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
              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <div className="input-box d-flex ">
                  <div className="icon">{FaLock}</div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className=" input"
                    required
                    name="Cpassword"
                    value={user.Cpassword}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group className="my-4" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree all statements in Terms of service"
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
                onClick={Register}
              >
                Register
              </Button>
            </Form>
          </div>
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 text-center   pt-5">
            <figure>
              <img src={img} alt="not found" className="img-fluid" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
