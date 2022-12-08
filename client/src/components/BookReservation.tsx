import React from 'react';
import { Box, Button, chakra, Image, Text } from '@chakra-ui/react';

const BookReservation = () => {
  return (
    <Box
      px={{ base: '1rem', md: '5rem', xl: '10rem' }}
      position='absolute'
      top={{ base: '46.5rem', md: '45.8rem' }}
    >
      <Box
        bg='white'
        shadow='md'
        rounded='md'
        px={{ base: 4, md: '8' }}
        py={{ base: 2, md: 5 }}
      ></Box>
    </Box>
  );
};

export default BookReservation;
