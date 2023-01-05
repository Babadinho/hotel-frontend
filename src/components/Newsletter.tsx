import React, { useEffect } from 'react';
import {
  chakra,
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  if (inView) {
    console.log(inView);
  }

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

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView]);
  return (
    <Box px={4} mx='auto' ref={ref}>
      <motion.div
        variants={container}
        animate={animation}
        initial='hidden'
        exit='exit'
      >
        <Box
          w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
          textAlign={{ base: 'left', md: 'center' }}
          mx='auto'
        >
          <motion.div variants={item}>
            <chakra.h1
              mb={3}
              fontSize={{ base: '4xl', md: '2.2rem' }}
              fontWeight={{ base: 'bold', md: 'extrabold' }}
              color='gray.700'
              _dark={{ color: 'gray.100' }}
              lineHeight='shorter'
            >
              Subscribe to our Newsletter.
            </chakra.h1>
          </motion.div>
          <motion.div variants={item}>
            <chakra.p
              mb={6}
              fontSize={{ base: 'lg', md: 'lg' }}
              color='gray.500'
              lineHeight='base'
            >
              Join our email list to receive exclusive offers and updates on the
              latest events and promotions at our hotel. Don't miss out on the
              opportunity to be the first to know about special rates and
              packages. Subscribe to our newsletter today!
            </chakra.p>
          </motion.div>
          <motion.div variants={item}>
            <SimpleGrid
              as='form'
              w={{ base: 'full', md: 7 / 12 }}
              columns={{ base: 1, lg: 6 }}
              spacing={3}
              pt={1}
              mx='auto'
              mb={8}
            >
              <GridItem as='label' colSpan={{ base: 'auto', lg: 4 }}>
                <VisuallyHidden>Your Email</VisuallyHidden>
                <Input
                  mt={0}
                  size='lg'
                  type='email'
                  placeholder='Enter your email...'
                  required
                  _focus={{
                    boxShadow: 'none',
                    borderColor: 'gray.400',
                  }}
                />
              </GridItem>
              <Button
                as={GridItem}
                w='full'
                variant='solid'
                colSpan={{ base: 'auto', lg: 2 }}
                size='lg'
                type='submit'
                bg='red.600'
                _hover={{ bg: 'red.700' }}
                color='white'
                cursor='pointer'
                fontWeight={400}
                className='button'
              >
                Get Started
              </Button>
            </SimpleGrid>
          </motion.div>
          <Stack
            display='flex'
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'start', md: 'center' }}
            mb={3}
            spacing={{ base: 2, md: 8 }}
            fontSize='xs'
            color='gray.600'
          ></Stack>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Newsletter;
