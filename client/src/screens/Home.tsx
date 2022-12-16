import React from 'react';
import Header from '../layouts/Header';
import About from '../components/About';
import RoomCards from '../components/RoomCards';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <RoomCards />
    </>
  );
};

export default Home;
