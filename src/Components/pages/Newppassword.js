import React, { useState } from 'react';
import './Newpassword.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
const FaLock = <FontAwesomeIcon icon={faLock} />;

function Newppassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [user, setuser] = useState({
    password: '',
    Cpassword: '',
    token: token,
  });
  const handladata = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const NewPassword = (e) => {
    e.preventDefault();
    const { password, Cpassword, token } = user;
    if (password && password === Cpassword && token) {
      axios.post('http://localhost:250/NewPassword', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    }
  };
  return (
    <>
      <div className="container py-5">
        <Form>
          <h6 className="text-center" style={{ color: '#5f1782' }}>
            Or sign up with credentials
          </h6>

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

          <Button
            type="submit"
            className="sign-btn w-100 "
            style={{
              background: '#5f1782',
              border: 'none',
              borderRadius: '10px',
            }}
            onClick={NewPassword}
          >
            UDATED
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Newppassword;
