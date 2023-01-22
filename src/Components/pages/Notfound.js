import React from 'react';
import './Notfound.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
function Notfound({ notimg }) {
  return (
    <>
      <NavBar />
      <div className="notfound text-center">
        <figure>
          <img src={notimg} alt="not found" className="img-fluid w-50 " />
        </figure>
      </div>
      <Footer />
    </>
  );
}

export default Notfound;
