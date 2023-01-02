import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdHomeFilled } from 'react-icons/md';
import React, { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <Link
      href='/'
      className='logo selectable'
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Box
        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
        fontSize={'2xl'}
        fontWeight={600}
        color={useColorModeValue('white', 'white')}
        className='logo'
        display='flex'
        alignItems='center'
      >
        <Text
          display={'flex'}
          alignItems='center'
          justifyContent='center'
          border={'2px'}
          rounded={100}
          mr='0.2rem'
          bgGradient='linear(to-b, red.600,linkedin.600)'
        >
          <MdHomeFilled />
        </Text>{' '}
        OTEL
      </Box>
    </Link>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box bg='red.600' color='gray.50'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Text align='center'>
          © 2022 Luxurious Hotel. All rights reserved. By{' '}
          <Link
            href='https://github.com/Babadinho'
            color='gray.400'
            fontWeight='400'
            target='_blank'
            _hover={{
              color: 'gray.300',
            }}
          >
            Babadinho
          </Link>
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
