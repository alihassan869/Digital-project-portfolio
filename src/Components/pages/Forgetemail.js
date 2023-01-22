import React, { useState } from 'react';
import './Forgetemail.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
const FaMessage = <FontAwesomeIcon icon={faMessage} />;

function Forgetemail() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
  });
  const handladata = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });
  };
  const EmailSent = (e) => {
    e.preventDefault();
    const { email } = user;
    if (email) {
      axios.post('http://localhost:250/Email', user).then((res) => {
        alert(res.data.message);
        // setuserlogin(res.data.user);
        navigate('/');
      });
    }
  };
  return (
    <>
      <div className="container">
        <Form>
          <h6 className="text-center mt-5" style={{ color: '#5f1782' }}>
            Or sign in with credentials
          </h6>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <div className="input-box d-flex  ">
              <div className="icon">{FaMessage}</div>
              <input
                type="email"
                placeholder=" Enter Email Here"
                className="input"
                required
                name="email"
                value={user.email}
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
            onClick={EmailSent}
          >
            SUBMIT
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Forgetemail;
