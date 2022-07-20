import {
  getRandomFloatPoint,
  getRandomNumber,
  getShuffledArray,
  getRandomArrayElement,
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

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
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
  'лучшее место для спокойного отдыха в Токио',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = () => {
  const randomPrice = `${getRandomNumber(2, 5)}000`;
  const longitude = getRandomFloatPoint(139.7, 139.8, 5);
  const latitude = getRandomFloatPoint(35.65, 35.7, 5);

  return {
    author: {
      avatar: NUMBER_AVATARS[getRandomNumber(0, NUMBER_AVATARS.length - 1)],
    },

    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: `${latitude}, ${longitude}`,
      price: randomPrice,
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomNumber(2, 5),
      guests: getRandomNumber(2, 5),
      checkin: getRandomArrayElement(OFFER_CHECKINS),
      checkout: getRandomArrayElement(OFFER_CHECKOUTS),
      features: getShuffledArray(OFFER_FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getShuffledArray(OFFER_PHOTOS),
    },

    location: {
      lat: latitude,
      lng: longitude,
    }
  };
};

createOffer();
