import React from 'react';
import './Service.css';
import img1 from '../assests/images/service1.png';
import img2 from '../assests/images/service2.png';
import img3 from '../assests/images/service3.png';
function Service() {
  return (
    <>
      <div className="Services text-center">
        <div className="text-title py-5">
          <div className="text-center">
            <h4>WHAT WE DO ?</h4>
          </div>
        </div>
        <div className="container">
          <div className="row py-3">
            <div className="col-md-4 col-10 mb-md-0 mb-3 mx-auto text-center">
              <figure>
                <img
                  src={img1}
                  alt="not found "
                  className="img-fluid w-50 h-50"
                />
              </figure>
              <h5>Growth Marketing</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis commodi voluptate modi eum aperiam iusto earum
                optio exercitationem velit labore?
              </p>
            </div>
            <div className="col-md-4 col-10 mb-md-0 mb-3 mx-auto text-center">
              <figure>
                <img
                  src={img2}
                  alt="not found "
                  className="img-fluid w-50 h-50"
                />
              </figure>
              <h5>ONLINE BRANDING</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis commodi voluptate modi eum aperiam iusto earum
                optio exercitationem velit labore?
              </p>
            </div>
            <div className="col-md-4 col-10 mb-md-0 mb-3 mx-auto text-center">
              <figure>
                <img
                  src={img3}
                  alt="not found "
                  className="img-fluid w-50 h-50"
                />
              </figure>
              <h5>ANIMATED ADS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis commodi voluptate modi eum aperiam iusto earum
                optio exercitationem velit labore?
              </p>
            </div>
          </div>
        </div>
        <button className="service-btn my-3 ">All Services</button>
      </div>
    </>
  );
}

export default Service;
