function getRandomFloatPoint (a, b, digits) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const random = Math.random() * (upper - lower) + lower;
  return +random.toFixed(digits);
}

getRandomFloatPoint(2, 4, 3);

function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

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

function getShuffledArray(selectedArray) {
  const maxLength = selectedArray.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  for(let i = 0; i < lengthOfArray; i++) {
    const indexOfElement = getRandomNumber(0, selectedArray.length - 1);
    const element = selectedArray[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}

const getRandomArrayElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const getRandomNumberOfRange = (arr) => getRandomNumber(arr[0], arr[1]);

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

const offers = Array.from({length: DATA_COUNT}, createOffer);
export {offers};
