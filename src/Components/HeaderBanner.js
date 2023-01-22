import React from 'react';
import './HeaderBanner.css';
import video from '../assests/images/play.png';
import table from '../assests/images/home2.png';
import wave1 from '../assests/images/wave1.png';
function HeaderBanner() {
  return (
    <>
      <div className=" header-banner pt-5 pb-0">
        <div className="container ">
          <div className="row pt-5">
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 text-white mt-md-5">
              <h3 className="mt-5">BEST DIGITAL AGENCY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                eligendi velit sunt necessitatibus quo ipsam impedit fugiat
                voluptatem atque eos.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={video}
                  alt="not found"
                  className="img-fluid me-2  video-img"
                />
                <p>Watch Videos</p>
              </div>
            </div>
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3">
              <figure>
                <img src={table} alt="not found" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
        <figure>
          <img src={wave1} alt="not found" className="w-100 wave-1 " />
        </figure>
      </div>
    </>
  );
}

export default HeaderBanner;
