import React, { useEffect } from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  Button,
  SimpleGrid,
  chakra,
} from '@chakra-ui/react';
const Room = require('../public/images/room.jpg');
import { MdArrowForward } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const data = {
  isNew: true,
  imageURL: Room,
  name: 'Double Deluxe Room',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const newArr = [1, 2, 3];

const RoomCards = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

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
    <Box px={{ base: '0.5rem', md: '5rem', xl: '10rem' }} mb='7rem'>
      <motion.div
        variants={container}
        animate={animation}
        initial='hidden'
        exit='exit'
      >
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
            Our Rooms & Suites
          </chakra.h2>
          <Text
            fontSize={{ base: '1rem', md: '1rem' }}
            color={'gray.600'}
            align={'center'}
          >
            Welcome to our hotel! We offer a variety of rooms and suites to suit
            your needs. Our rooms are spacious and comfortable, featuring all
            the amenities you need for a relaxing stay. Our suites are even more
            luxurious
          </Text>
        </Stack>

        <SimpleGrid minChildWidth='300px' spacing='25px' ref={ref}>
          {newArr &&
            newArr.length > 0 &&
            newArr.map((room: any, i: any) => {
              return (
                <motion.div variants={item} key={i}>
                  <Flex w='full' alignItems='center' justifyContent='center'>
                    <Box
                      bg={useColorModeValue('white', 'gray.800')}
                      w={{ base: 'full', md: 'md' }}
                      rounded='md'
                      shadow='sm'
                      position='relative'
                      className='room_card'
                    >
                      {data.isNew && (
                        <Circle
                          size='10px'
                          position='absolute'
                          top={2}
                          right={2}
                          bg='red.200'
                        />
                      )}

                      <Image
                        src={data.imageURL}
                        alt={`Picture of ${data.name}`}
                        roundedTop='lg'
                        maxH={'18rem'}
                        w='full'
                      />

                      <Box px='4' py='6'>
                        <Box
                          fontSize='1.4rem'
                          fontWeight='semibold'
                          as='h4'
                          lineHeight='tight'
                          mb='0.2rem'
                          color={'gray.700'}
                        >
                          {data.name}
                        </Box>
                        <Text
                          fontSize={{ base: '1rem', md: '1rem' }}
                          color={'gray.600'}
                          mb='1rem'
                        >
                          {data.name}
                        </Text>

                        <Flex
                          justifyContent='space-between'
                          alignItems='center'
                        >
                          <Box
                            fontSize='xl'
                            color={useColorModeValue('gray.700', 'white')}
                          >
                            £{data.price.toFixed(2)}
                            <Box as='span' color={'gray.600'} fontSize='lg'>
                              {' '}
                              /Night
                            </Box>
                          </Box>
                          <Button
                            className='button'
                            size={'md'}
                            rounded={50}
                            bg='red.600'
                            _hover={{ bg: 'red.600' }}
                            color='white'
                            fontSize='sm'
                            fontWeight={400}
                            letterSpacing='wider'
                          >
                            Book Now{' '}
                            <Box as='span' ml='0.3rem'>
                              <MdArrowForward />
                            </Box>
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                </motion.div>
              );
            })}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};

export default RoomCards;
