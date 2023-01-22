import React from 'react';
import './Socialicon.css';
import l1 from '../assests/images/facebook-icon.png';
import l2 from '../assests/images/instagram-icon.png';
import l3 from '../assests/images/twitter-icon.png';
import l4 from '../assests/images/snapchat-icon.png';
function SocialIcons() {
  return (
    <>
      <div className="container links">
        <div className="title text-center">
          <h3>FIND US ON SOCIAL MEDIA</h3>
        </div>
        <div className=" d-flex  justify-content-center align-items-center">
          <div className="icon">
            <figure>
              <img src={l1} alt="not found" className="img-fluid " />
            </figure>
          </div>
          <div className="icon">
            <figure>
              <img src={l2} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="icon">
            <figure>
              <img src={l3} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="icon">
            <figure>
              <img src={l4} alt="not found" className="img-fluid" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialIcons;
