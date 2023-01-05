const Room1 = require('../public/images/gallery/room1.jpg');
const Room5 = require('../public/images/gallery/room5.jpg');
const Room6 = require('../public/images/gallery/room6.jpg');
const Restaurant1 = require('../public/images/gallery/restaurant1.jpg');
const Restaurant2 = require('../public/images/gallery/restaurant2.jpg');
const Restaurant3 = require('../public/images/gallery/restaurant3.jpg');
const Gym1 = require('../public/images/gallery/gym1.jpg');
const Gym2 = require('../public/images/gallery/gym2.jpg');
const Gym3 = require('../public/images/gallery/gym3.jpg');
const Hotel1 = require('../public/images/gallery/hotel1.jpeg');
const Hotel3 = require('../public/images/gallery/hotel3.jpg');
const Hotel4 = require('../public/images/gallery/hotel4.jpg');

interface Gallery {
  photo: string;
  category: string;
}

export const gallery: Gallery[] = [
  {
    photo: Room1,
    category: 'rooms',
  },

  {
    photo: Restaurant1,
    category: 'restaurant',
  },
  {
    photo: Hotel1,
    category: 'hotel',
  },
  {
    photo: Gym1,
    category: 'gym',
  },
  {
    photo: Hotel3,
    category: 'hotel',
  },
  {
    photo: Room5,
    category: 'rooms',
  },
  {
    photo: Restaurant2,
    category: 'restaurant',
  },
  {
    photo: Room6,
    category: 'rooms',
  },
  {
    photo: Gym2,
    category: 'gym',
  },
  {
    photo: Restaurant3,
    category: 'restaurant',
  },
  {
    photo: Hotel4,
    category: 'hotel',
  },
  {
    photo: Gym3,
    category: 'gym',
  },
];
