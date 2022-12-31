import React, { useEffect, useState } from 'react';
import { Box, Stack, Text, chakra, Link } from '@chakra-ui/react';

const Gallery = () => {
  const buttons = ['All', 'Room', 'Yoga', 'Party', 'Hotel', 'Club'];
  const [active, setActive] = useState<string>('All');

  useEffect(() => {}, []);

  return (
    <Box px={{ base: '0.5rem', md: '5rem', xl: '10rem' }}>
      <Stack
        align={'center'}
        mx={'auto'}
        maxW={'xxl'}
        w={{ base: 'full', md: '50vw' }}
        mb='3rem'
      >
        <chakra.h2
          fontSize={{ base: '2xl', md: '3xl' }}
          color={'gray.700'}
          fontWeight='bold'
        >
          Some Exclusive Photo Gallery
        </chakra.h2>
        <Text
          fontSize={{ base: '1rem', md: '1rem' }}
          color={'gray.600'}
          align={'center'}
        >
          The hotel's photo gallery showcases stunning images of the property's
          luxurious rooms, amenities, and surroundings.
        </Text>
      </Stack>

      <Box
        px={'2rem'}
        display='flex'
        justifyContent='center'
        flexWrap={'wrap'}
        gap={{ base: '2.4rem', md: '3rem' }}
      >
        {buttons.map((button, i) => {
          return (
            <Link
              textTransform='uppercase'
              fontSize='0.87rem'
              fontWeight='bold'
              color={active === button ? 'red.600' : 'gray.700'}
              onClick={() => setActive(button)}
              key={i}
              _hover={{
                textDecoration: 'none',
                color: 'red.600',
              }}
              className='gallery_button'
            >
              {button}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Gallery;
