import React, { useState } from 'react';
import { Box, Stack, Button, StackDivider } from '@chakra-ui/react';
import { Dayjs } from 'dayjs';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const mui_theme = createTheme();

interface Reservation {
  arrival: Dayjs | null;
  departure: Dayjs | null;
  adult: string;
  children: string;
}

const BookReservation = () => {
  const [values, setValues] = useState<Reservation>({
    arrival: null,
    departure: null,
    adult: '',
    children: '',
  });

  const { arrival, departure, adult, children } = values;

  return (
    <Box
      px={{ base: '0.5rem', md: '5rem', xl: '10rem' }}
      position='absolute'
      bottom={{
        base: '-10.5rem',
        sm: '-7rem',
        md: '-7rem',
        xl: '-4.5rem',
      }}
      left={0}
      right={0}
    >
      <Box
        bg='white'
        shadow='md'
        rounded='md'
        px={{ base: 4, md: 6 }}
        py={{ base: 10, md: 10 }}
      >
        <Stack
          direction={{ base: 'column', xl: 'row' }}
          justify='space-between'
          align='stretch'
          spacing='12px'
          divider={<StackDivider borderColor='gray.200' />}
        >
          <Stack
            direction={['row']}
            spacing='12px'
            justifyContent={'space-between'}
            w={'100%'}
          >
            <MuiThemeProvider theme={mui_theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label='Arrival'
                  value={arrival}
                  onChange={(arrivalDate) =>
                    setValues({ ...values, arrival: arrivalDate })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        width: '100%',
                      }}
                      className='datePicker'
                    />
                  )}
                />
              </LocalizationProvider>
            </MuiThemeProvider>

            <MuiThemeProvider theme={mui_theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label='Departure'
                  value={departure}
                  onChange={(departureDate) =>
                    setValues({ ...values, departure: departureDate })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        width: '100%',
                      }}
                      className='datePicker'
                    />
                  )}
                />
              </LocalizationProvider>
            </MuiThemeProvider>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row', md: 'row' }}
            spacing='12px'
            w={'100%'}
          >
            <Stack direction={['row']} spacing='12px' w={'100%'}>
              <MuiThemeProvider theme={mui_theme}>
                <Box w={'100%'}>
                  <FormControl sx={{ minWidth: '100%' }}>
                    <InputLabel id='demo-simple-select-label'>Adult</InputLabel>
                    <Select
                      sx={{
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#c53030',
                        },
                      }}
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={adult}
                      label='Adult'
                      onChange={(e: SelectChangeEvent) =>
                        setValues({ ...values, adult: e.target.value })
                      }
                    >
                      <MenuItem value={1}>01</MenuItem>
                      <MenuItem value={2}>02</MenuItem>
                      <MenuItem value={3}>03</MenuItem>
                      <MenuItem value={4}>04</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box w={'100%'}>
                  <FormControl sx={{ minWidth: '100%' }}>
                    <InputLabel id='demo-simple-select-label'>
                      Children
                    </InputLabel>
                    <Select
                      sx={{
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#c53030',
                        },
                      }}
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={children}
                      label='Children'
                      onChange={(e: SelectChangeEvent) =>
                        setValues({ ...values, children: e.target.value })
                      }
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>01</MenuItem>
                      <MenuItem value={2}>02</MenuItem>
                      <MenuItem value={3}>03</MenuItem>
                      <MenuItem value={4}>04</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </MuiThemeProvider>
            </Stack>

            <Box w={'100%'}>
              <Button
                className='button'
                size={'lg'}
                rounded={'md'}
                h='56px'
                bg='red.600'
                _hover={{ bg: 'red.600' }}
                color='white'
                fontSize='sm'
                letterSpacing={{ base: 'short', xl: 'wider' }}
                w={'100%'}
              >
                CHECK ROOMS
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookReservation;
