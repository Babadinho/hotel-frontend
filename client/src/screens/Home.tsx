import React from 'react';
import Header from '../layouts/Header';
import About from '../components/About';
import RoomCards from '../components/RoomCards';
import Gallery from '../components/Gallery';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box pb='3rem'>
      <Header />
      <About />
      <RoomCards />
      <Gallery />
    </Box>
  );
};

export default Home;
