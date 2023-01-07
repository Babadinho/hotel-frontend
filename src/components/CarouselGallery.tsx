import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';

const CarouselGallery = ({
  isOpen,
  onClose,
  gallery,
  currentSlide,
  setCurrentSlide,
}: any) => {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  } as const;

  const slidesCount = gallery.length;

  const prevSlide = () => {
    setCurrentSlide((s: number) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s: number) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex
          w='full'
          alignItems='center'
          justifyContent='center'
          alignContent='center'
        >
          <Flex w='full' overflow='hidden' pos='relative'>
            <Flex h='400px' w='full' {...carouselStyle}>
              {gallery.map((gallery: { photo: string }, sid: number) => (
                <Box
                  key={`slide-${sid}`}
                  boxSize='full'
                  shadow='md'
                  flex='none'
                >
                  <Text
                    color='white'
                    fontSize='xs'
                    p='8px 12px'
                    pos='absolute'
                    top='0'
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                  <Image
                    src={gallery.photo}
                    alt='carousel image'
                    boxSize='full'
                    backgroundSize={'cover'}
                  />
                </Box>
              ))}
            </Flex>
            <Text {...arrowStyles} left='0' onClick={prevSlide}>
              &#10094;
            </Text>
            <Text {...arrowStyles} right='0' onClick={nextSlide}>
              &#10095;
            </Text>
            <HStack justify='center' pos='absolute' bottom='8px' w='full'>
              {Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor='pointer'
                  boxSize={['7px', null, '15px']}
                  m='0 2px'
                  bg={
                    currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'
                  }
                  rounded='50%'
                  display='inline-block'
                  transition='background-color 0.6s ease'
                  _hover={{ bg: 'blackAlpha.800' }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default CarouselGallery;
