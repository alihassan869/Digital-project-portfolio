import React from 'react';
import './Testimoonial.css';
import u1 from '../assests/images/user1.jpg';
import u2 from '../assests/images/user2.jpg';
function Testimonial() {
  return (
    <>
      <div className="container-fluid Testimonials py-5" id="Testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-10 mx-auto">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quod voluptatum labore, iusto debitis in!
              </p>
              <div className="row">
                <div className="img-client d-flex">
                  <figure className="mx-2">
                    <img
                      src={u1}
                      className="img-fluid rounded-circle"
                      alt="not found"
                    />
                  </figure>
                  <div className="stext-client">
                    <strong>Ayesha</strong>
                    <p>Co-founder at xyz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-10 mx-auto">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit quod voluptatum labore, iusto debitis in!
              </p>
              <div className="row">
                <div className="img-client d-flex">
                  <figure className="mx-2">
                    <img
                      src={u2}
                      className="img-fluid rounded-circle"
                      alt="not found"
                    />
                  </figure>
                  <div className="stext-client">
                    <strong>ALi Hassan</strong>
                    <p>Director at xyz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
