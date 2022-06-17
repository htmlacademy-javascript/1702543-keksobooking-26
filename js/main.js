// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloatPoint (a, b, digits) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const random = Math.random() * (upper - lower) + lower;
  return +random.toFixed(digits);
}

getRandomFloatPoint(2, 4, 3);

// Генерация данных

function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// author, объект — описывает автора

const NUMBER_AVATAR = [
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

// offer, объект — содержит информацию об объявлении

const OFFER_TITLE = [
  'Лайтхаус',
  'Ривьера',
  'Экспотель',
  'Домик Тревел',
  'AvHouse',
];

const OFFER_ADDRESS = {
  longitude: {min: 35.65, max: 35.7},
  latitude: {min: 139.7, max: 139.8},
  digits: 5,
};

const OFFER_PRICE = {
  min: 2,
  max: 15,
};

const OFFER_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_ROOMS = {
  min: 1,
  max: 5,
};

const OFFER_GUESTS = {
  min: 2,
  max: 12,
};

const OFFER_CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKOUT = [
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

const OFFER_DESCRIPTION = [
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

// Функция вывода массива случайной длины из значений

function getArray(selectedArray) {
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

const getRandomElement = (element) => element[getRandomNumber(0, element.length - 1)];

const getRandomArray = (array) => getRandomNumber(array.min, array.max);

const DATA_COUNT = 10;

const createObject = () => {
  const randomPrice = `${getRandomArray(OFFER_PRICE)}000`;
  const randomLongitude = getRandomFloatPoint(OFFER_ADDRESS.longitude.min, OFFER_ADDRESS.longitude.max, OFFER_ADDRESS.digits);
  const randomLatitude = getRandomFloatPoint(OFFER_ADDRESS.latitude.min, OFFER_ADDRESS.latitude.max, OFFER_ADDRESS.digits);

  return {
    author: {
      avatar: `img/avatars/user ${NUMBER_AVATAR[getRandomNumber(0, NUMBER_AVATAR.length - 1)]}.png`,
    },

    offer: {
      title: getRandomElement(OFFER_TITLE),
      location : `${randomLatitude}, ${randomLongitude}`,
      price: randomPrice,
      type: getRandomElement(OFFER_TYPE),
      rooms: getRandomArray(OFFER_ROOMS),
      guests: getRandomArray(OFFER_GUESTS),
      checkin: getRandomElement(OFFER_CHECKIN),
      checkout: getRandomElement(OFFER_CHECKOUT),
      features: getArray(OFFER_FEATURES),
      description: getRandomElement(OFFER_DESCRIPTION),
      photos: getArray(OFFER_PHOTOS),
    },

    location: {
      location: {
        lat: randomLatitude,
        lng: randomLongitude,
      }
    }
  };
};

const similarData = Array.from({length: DATA_COUNT}, createObject);
export {similarData};
