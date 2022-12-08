import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { MdHomeFilled } from 'react-icons/md';

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [navScroll, setNavScroll] = useState(false);

  // navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <Box
      position={navScroll ? 'fixed' : 'absolute'}
      top='0'
      right={'0'}
      left={'0'}
      zIndex={10}
    >
      <Flex
        bg={navScroll && 'red.700'}
        minH={navScroll ? '60px' : '75px'}
        py={{ base: 2 }}
        px={{ base: '1rem', md: '5rem', xl: '10rem' }}
        borderBottom={!navScroll && 2}
        borderStyle={'solid'}
        borderColor={'#ffffff26'}
        align={'center'}
        justifyContent='space-between'
        className={navScroll && 'navBar'}
        opacity={navScroll && 0.98}
      >
        <Link
          href='/'
          className='logo selectable'
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text
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
          </Text>
        </Link>
        <Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav navScroll={navScroll} />
          </Flex>
        </Flex>
        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={7} h={7} color='white' />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = ({ navScroll }: any) => {
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('red.500', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'0.95rem'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: !navScroll ? linkHoverColor : 'gray.100',
                }}
              >
                {navItem.label} {navItem.children && <ChevronDownIcon />}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                mt='0.7rem'
                border={0}
                w='220px'
                boxShadow={'sm'}
                bg={popoverContentBgColor}
                p={3}
                rounded={'sm'}
                minW={'220px'}
                borderTop='2px'
                borderTopColor='red.400'
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('red.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.500' }}
            fontWeight={500}
            fontSize={'0.9rem'}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          // mt={1}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('red.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Rooms & Suites',
    children: [
      {
        label: 'Room List',
        subLabel: 'Explore our rooms',
        href: '#',
      },
      {
        label: 'Room Details',
        subLabel: 'Explore our rooms',
        href: '#',
      },
    ],
  },
  {
    label: 'Gallery',
    href: '#',
  },
  {
    label: 'Explore',
    children: [
      {
        label: 'Latest News',
        subLabel: 'Explore latest news',
        href: '#',
      },
      {
        label: 'Upcoming Events',
        subLabel: 'Find upcoming events',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export default NavBar;
