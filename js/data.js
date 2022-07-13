import {
  getRandomFloatPoint,
  getRandomNumber,
  getShuffledArray,
  getRandomArrayElement,
  getRandomNumberOfRange
} from './util.js';

const NUMBER_AVATARS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

const OFFER_TITLES = [
  'Лайтхаус',
  'Ривьера',
  'Экспотель',
  'Домик Тревел',
  'AvHouse',
];

const longitude = {
  min: 35.65,
  max: 35.7
};

const latitude = {
  min: 139.7,
  max: 139.8
};

const digits = [
  5,
];

const OFFER_PRICES = [
  2,
  15
];

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_AMOUNT_ROOMS = [
  2,
  4,
];

const OFFER_GUESTS = [
  2,
  12,
];

const OFFER_CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_DESCRIPTIONS = [
  'дизайн выполнен в скандинавском стиле',
  'молодёжный отель в центре города',
  'семейный отель',
  'для любителей активного отдыха',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = () => {
  const randomPrice = `${getRandomNumber(OFFER_PRICES[0], OFFER_PRICES[1])}000`;
  const randomLongitude = getRandomFloatPoint(longitude.min, longitude.max, digits);
  const randomLatitude = getRandomFloatPoint(latitude.min, latitude.max, digits);

  return {
    author: {
      avatar: NUMBER_AVATARS[getRandomNumber(0, NUMBER_AVATARS.length - 1)],
    },

    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: `${randomLatitude}, ${randomLongitude}`,
      price: randomPrice,
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomNumberOfRange(OFFER_AMOUNT_ROOMS),
      guests: getRandomNumberOfRange(OFFER_GUESTS),
      checkin: getRandomArrayElement(OFFER_CHECKINS),
      checkout: getRandomArrayElement(OFFER_CHECKOUTS),
      features: getShuffledArray(OFFER_FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getShuffledArray(OFFER_PHOTOS),
    },

    location: {
      lat: randomLatitude,
      lng: randomLongitude,
    }
  };
};

const DATA_COUNT = 10;
const offers = () => Array.from({length: DATA_COUNT}, createOffer);
export {offers, OFFER_PHOTOS, OFFER_FEATURES};
