import React from 'react';
import './Home.css';
import NavBar from '../NavBar';
import HeaderBanner from '../HeaderBanner';
import Service from '../Service';
import ABout from '../ABout';
import Client from '../Client';
import Testimonial from '../Testimonial';
import SocialIcons from '../SocialIcons';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <NavBar />
      <HeaderBanner />
      <Service />
      <ABout />
      <Client />
      <Testimonial />
      <SocialIcons />
      <Footer />
    </>
  );
}

export default Home;
