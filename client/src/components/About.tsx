import React, { useEffect } from 'react';
import { Box, Flex, Link, chakra, Text, Button } from '@chakra-ui/react';
import { MdHomeFilled } from 'react-icons/md';
const Background = require('../public/images/back4.jpg');
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const animation = useAnimation();

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
        duration: 1.3,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        ease: 'easeIn',
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView]);

  return (
    <motion.div
      variants={item}
      animate={animation}
      initial='hidden'
      exit='exit'
    >
      <Flex
        ref={ref}
        mt={{ base: '18rem', md: '15rem', lg: '13rem' }}
        mb='5rem'
        w='full'
        alignItems='center'
        justifyContent='center'
        px={{ base: '1rem', md: '5rem', xl: '10rem' }}
      >
        <Box
          bg='white'
          _dark={{ bg: 'gray.800' }}
          display={{ lg: 'flex' }}
          w='100%'
          shadow='lg'
          rounded='lg'
        >
          <Box w={{ lg: '50%' }}>
            <Box
              h={{ base: 64, lg: 'full' }}
              bgSize='cover'
              style={{
                backgroundImage: `url('${Background}')`,
              }}
            ></Box>
          </Box>

          <Box
            py={8}
            px={6}
            maxW={{ base: 'full', lg: '5xl' }}
            w={{ lg: '50%' }}
          >
            <chakra.h2
              fontSize={{ base: '2xl', md: '3xl' }}
              color='gray.800'
              _dark={{ color: 'white' }}
              fontWeight='bold'
              display={'flex'}
              alignItems='center'
            >
              ABOUT&nbsp;
              <Box
                as='span'
                display={'flex'}
                alignItems='center'
                justifyContent='center'
                border={'2px'}
                rounded={'100%'}
                h='2.2rem'
                w='2.2rem'
                mr='0.2rem'
                bgGradient='linear(to-b, red.600,linkedin.600)'
                color='white'
              >
                <MdHomeFilled color='white' />
              </Box>{' '}
              OTEL
            </chakra.h2>
            <chakra.p
              mt={4}
              fontSize={{ base: '1rem', md: '1.1rem' }}
              color='gray.600'
            >
              Hotel is a company that operates a chain of hotels and resorts.
              Our properties are located in popular tourist destinations around
              the world, offering guests a comfortable and luxurious experience
              during their travels. Our hotels are equipped with a range of
              modern amenities, including on-site restaurants, fitness centers,
              and swimming pools. We also offer a variety of room options to
              suit the needs of our guests, from standard rooms to suites. In
              addition, we provide exceptional customer service and are
              dedicated to ensuring that our guests have a memorable stay with
              us.
            </chakra.p>

            <Box mt={8}>
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
                Read More
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default About;
