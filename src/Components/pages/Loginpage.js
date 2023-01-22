import React from 'react';
import './Loginpage.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Login from '../Login';
function Loginpage({ SetuserLogin }) {
  return (
    <>
      <NavBar />
      <Login SetuserLogin={SetuserLogin} />
      <Footer />
    </>
  );
}

export default Loginpage;
