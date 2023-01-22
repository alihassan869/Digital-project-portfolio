import React from 'react';
import './Footer.css';
import logo from '../assests/images/demo-logo.png';
import wave2 from '../assests/images/wave2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/free-brands-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
// const FaLock = <FontAwesomeIcon icon={faLock} />;
// const FaGoogle = <FontAwesomeIcon icon={faGoogle} />;
const FaMessage = <FontAwesomeIcon icon={faMessage} />;
const FaLocation = <FontAwesomeIcon icon={faLocation} />;
const FaPhone = <FontAwesomeIcon icon={faPhone} />;

function Footer() {
  return (
    <>
      <div className="Footer text-white text-center">
        <figure>
          <img src={wave2} alt="not found" className="w-100" />
        </figure>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 text-start  ">
              <figure>
                <img src={logo} alt="not found " className="img-fluid w-50" />
              </figure>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                laudantium sunt, ut molestiae nulla voluptatem perspiciatis
                sequi vel minus ipsa quibusdam porro ab dolore aliquid, rerum
                quia iusto consectetur quis!
              </p>
            </div>
            <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 text-end">
              <h5>Contact Us</h5>
              <p>
                {FaLocation}
                <span className="ms-2">World Trade Center,Bangalore.</span>
              </p>
              <p>
                {FaPhone}
                <span className="ms-2">+102171981718</span>
              </p>
              <p>
                {FaMessage}
                <span className="ms-2">xyz@gmail.com</span>
              </p>
            </div>
            <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3  text-end">
              <h4>GET IN TOUNCH</h4>
              <form action="#">
                <input
                  type="email"
                  name="email"
                  id="email-footer"
                  className=" my-2"
                  required
                />
                <br></br>
                <input
                  type="submit"
                  value="SUBCRIBED"
                  className="footer-btn shadow-lg py-2 px-3 "
                />
              </form>
            </div>
          </div>
          <p className="py-5">CopyRight@created By Ali Hassan</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
