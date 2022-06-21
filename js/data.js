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

const OFFER_ADDRESSES = {
  longitude: {min: 35.65, max: 35.7},
  latitude: {min: 139.7, max: 139.8},
  digits: 5,
};

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

const OFFER_ROOMS = [
  1,
  5,
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

const DATA_COUNT = 10;

const createOffer = () => {
  const randomPrice = `${getRandomNumber(OFFER_PRICES[0], OFFER_PRICES[1])}000`;
  const randomLongitude = getRandomFloatPoint(OFFER_ADDRESSES.longitude.min, OFFER_ADDRESSES.longitude.max, OFFER_ADDRESSES.digits);
  const randomLatitude = getRandomFloatPoint(OFFER_ADDRESSES.latitude.min, OFFER_ADDRESSES.latitude.max, OFFER_ADDRESSES.digits);

  return {
    author: {
      avatar: `img/avatars/user ${NUMBER_AVATARS[getRandomNumber(0, NUMBER_AVATARS.length - 1)]}.png`,
    },

    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      location : `${randomLatitude}, ${randomLongitude}`,
      price: randomPrice,
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomNumberOfRange(OFFER_ROOMS),
      guests: getRandomNumberOfRange(OFFER_GUESTS),
      checkin: getRandomArrayElement(OFFER_CHECKINS),
      checkout: getRandomArrayElement(OFFER_CHECKOUTS),
      features: getShuffledArray(OFFER_FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getShuffledArray(OFFER_PHOTOS),
    },

    location: {
      location: {
        lat: randomLatitude,
        lng: randomLongitude,
      }
    }
  };
};

const offers = () => Array.from({length: DATA_COUNT}, createOffer);
export {offers};
