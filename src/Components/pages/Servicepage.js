import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Servicepage.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Service from '../Service';
import SocialIcons from '../SocialIcons';
function Servicepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavBar />
      <Service />
      <div className="container btn-service  text-center py-5">
        <p> For More Details click below button</p>
        <Button onClick={handleShow} className="mx-auto service-btn ">
          Read More
        </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Read more Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            maxime officiis nihil deleniti magni? Ducimus possimus, ea
            repudiandae omnis voluptas placeat voluptatum explicabo accusamus
            ratione dicta perspiciatis quos soluta aspernatur vel, animi at
            eveniet neque minus architecto voluptatem reprehenderit, tempore
            illo? Ad maxime dolor reprehenderit, exercitationem laborum
            quibusdam voluptates est. Ex aspernatur voluptates, sint praesentium
            minima odit libero similique ad nulla nobis fugiat eum adipisci
            rerum atque. Voluptas, architecto iusto nostrum dolorem, delectus a
            quidem libero dolor accusamus impedit ex!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            maxime officiis nihil deleniti magni? Ducimus possimus, ea
            repudiandae omnis voluptas placeat voluptatum explicabo accusamus
            ratione dicta perspiciatis quos soluta aspernatur vel, animi at
            eveniet neque minus architecto voluptatem reprehenderit, tempore
            illo? Ad maxime dolor reprehenderit, exercitationem laborum
            quibusdam voluptates est. Ex aspernatur voluptates, sint praesentium
            minima odit libero similique ad nulla nobis fugiat eum adipisci
            rerum atque. Voluptas, architecto iusto nostrum dolorem, delectus a
            quidem libero dolor accusamus impedit ex!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            maxime officiis nihil deleniti magni? Ducimus possimus, ea
            repudiandae omnis voluptas placeat voluptatum explicabo accusamus
            ratione dicta perspiciatis quos soluta aspernatur vel, animi at
            eveniet neque minus architecto voluptatem reprehenderit, tempore
            illo? Ad maxime dolor reprehenderit, exercitationem laborum
            quibusdam voluptates est. Ex aspernatur voluptates, sint praesentium
            minima odit libero similique ad nulla nobis fugiat eum adipisci
            rerum atque. Voluptas, architecto iusto nostrum dolorem, delectus a
            quidem libero dolor accusamus impedit ex!
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      <SocialIcons />
      <Footer />
    </>
  );
}

export default Servicepage;
