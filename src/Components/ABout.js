import React from 'react';
import './About.css';
import computer from '../assests/images/network.png';
function ABout() {
  return (
    <>
      <div className="About ">
        <div className="text-title py-5">
          <div className="text-center">
            <h4>WHY CHOOSE US ?</h4>
          </div>
        </div>
        <div className="container ">
          <div className="row pt-5">
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3  mt-md-5">
              <h3 className="mt-5">Why we're different</h3>
              <li>Understand our client business gola first</li>
              <li>Believe in doing business with honey</li>
              <li>We deliver on time</li>
              <li>We create a winning content strategy</li>
              <li>We Protect Your Online reputation</li>
              <li>We Create a Winning contact strategy</li>
              <li>We Protect Your Online reputation</li>
            </div>
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3">
              <figure>
                <img src={computer} alt="not found" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ABout;
