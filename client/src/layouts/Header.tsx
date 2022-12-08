import React from 'react';
import { Box, Button, chakra, Image, Text } from '@chakra-ui/react';
const HeaderBackground = require('../public/images/back4.jpg');
import {
  MdCall,
  MdDirectionsCarFilled,
  MdHomeFilled,
  MdWifi,
} from 'react-icons/md';
import { motion } from 'framer-motion';

const Header = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.01],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Box h={'100vh'} position='relative'>
        <Box className='overlay'></Box>
        <Image
          src={HeaderBackground}
          alt='hotel'
          fit={{ base: 'cover', md: 'cover', lg: 'cover' }}
          w='full'
          h={{ base: 'full', md: 'full' }}
          bg='gray.100'
          loading='lazy'
        />
        <Box
          maxW={{ base: '7xl' }}
          px={{ base: 4, sm: 6, lg: 8 }}
          position='absolute'
          ml='auto'
          mr='auto'
          left={0}
          right={0}
          textAlign='center'
          top={170}
        >
          <Box
            textAlign='center'
            w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
            mx='auto'
          >
            <Box
              display={'flex'}
              justifyContent='center'
              fontSize='6xl'
              fontWeight='extrabold'
              color='white'
            >
              <motion.div variants={item}>
                <Text
                  display={'flex'}
                  alignItems='center'
                  justifyContent='center'
                  border={'4px'}
                  width='6rem'
                  height='6rem'
                  rounded={100}
                  bgGradient='linear(to-b, red.600,linkedin.600)'
                >
                  <MdHomeFilled />
                </Text>
              </motion.div>
            </Box>
            <Box>
              <motion.div variants={item}>
                <chakra.h1
                  fontSize={{ base: '5xl', sm: '5xl', md: '6xl' }}
                  letterSpacing='tight'
                  lineHeight='short'
                  fontWeight='bold'
                  color='white'
                  _dark={{ color: 'white' }}
                >
                  Welcome to Hotel
                </chakra.h1>
              </motion.div>
            </Box>
            <motion.div variants={item}>
              <chakra.h1
                fontSize={{ base: '1.7rem', md: '2rem' }}
                letterSpacing='tight'
                lineHeight='short'
                fontWeight='400'
                color='white'
                _dark={{ color: 'white' }}
              >
                <chakra.span display={{ base: 'block', xl: 'inline' }}>
                  Enjoy your weekends{' '}
                </chakra.span>
                <chakra.span
                  display={{ base: 'block', xl: 'inline' }}
                  color='brand.600'
                  _dark={{ color: 'brand.400' }}
                >
                  near the most popular attractions
                </chakra.span>
              </chakra.h1>
            </motion.div>
            <motion.div variants={item}>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: 'auto', lg: 0 }}
                mb={6}
                fontSize={{ base: 'xs', md: 'md' }}
                color='white'
                lineHeight='base'
                display={'flex'}
                justifyContent='center'
              >
                <chakra.span display={'flex'} alignItems='center'>
                  <MdWifi />
                  <Text pl='0.2rem'>Free Wi-Fi</Text>
                </chakra.span>
                <chakra.span display={'flex'} alignItems='center' ml='1rem'>
                  <MdDirectionsCarFilled />
                  <Text pl='0.2rem'>Car Parking</Text>
                </chakra.span>
                <chakra.span display={'flex'} alignItems='center' ml='1rem'>
                  <MdCall />
                  <Text pl='0.2rem'>24/7 Customer Service</Text>
                </chakra.span>
              </chakra.p>
            </motion.div>
            <motion.div variants={item}>
              <Button
                className='button'
                size={'lg'}
                rounded={50}
                bg='red.600'
                _hover={{ bg: 'red.600' }}
                color='white'
                fontSize='sm'
                letterSpacing='wider'
              >
                BOOK NOW
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Header;
