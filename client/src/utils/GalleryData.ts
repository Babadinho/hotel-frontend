const Room1 = require('../public/images/gallery/room1.jpg');
const Room5 = require('../public/images/gallery/room5.jpg');
const Room6 = require('../public/images/gallery/room6.jpg');
const Party1 = require('../public/images/gallery/party1.jpg');
const Party2 = require('../public/images/gallery/party2.jpg');
const Party3 = require('../public/images/gallery/party3.jpg');
const Yoga1 = require('../public/images/gallery/yoga1.jpg');
const Yoga2 = require('../public/images/gallery/yoga2.jpg');
const Yoga3 = require('../public/images/gallery/yoga3.jpg');
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
    photo: Party1,
    category: 'party',
  },
  {
    photo: Hotel1,
    category: 'hotel',
  },
  {
    photo: Yoga1,
    category: 'yoga',
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
    photo: Party2,
    category: 'party',
  },
  {
    photo: Room6,
    category: 'rooms',
  },
  {
    photo: Yoga2,
    category: 'yoga',
  },
  {
    photo: Party3,
    category: 'party',
  },
  {
    photo: Hotel4,
    category: 'hotel',
  },
  {
    photo: Yoga3,
    category: 'yoga',
  },
];
