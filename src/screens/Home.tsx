import React from 'react';
import Header from '../layouts/Header';
import About from '../components/About';
import RoomCards from '../components/RoomCards';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box pb='10rem'>
      <Header />
      <About />
      <RoomCards />
      <Gallery />
      <Newsletter />
    </Box>
  );
};

export default Home;
