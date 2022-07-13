import { getRandomArrayElement } from './util.js';
import { OFFER_PHOTOS, OFFER_FEATURES } from './data.js';

const OFFER_TYPES_RUS = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const similarOffersTemplate = document.querySelector('#card').content.querySelector('.popup');

const createSimilarElement = (data) => {
  const filterElement = similarOffersTemplate.cloneNode(true);

  const arrayTypes = Object.values(OFFER_TYPES_RUS);
  if (arrayTypes) {
    filterElement.querySelector('.popup__type').textContent = getRandomArrayElement(arrayTypes);
  } else {
    filterElement.querySelector('.popup__type').remove();
  }

  if (OFFER_PHOTOS.length === 0) {
    filterElement.querySelector('.popup__photos').remove();
  } else {
    const photoData = filterElement.querySelector('.popup__photo');
    const photoAll = data.offer.photos;
    for (let i = 0; i < photoAll.length; i++) {
      const photoClone = photoData.cloneNode(true);
      photoClone.src = photoAll[i];
      filterElement.querySelector('.popup__photos').append(photoClone);
    }
    photoData.remove();
  }

  if (data.offer.title) {
    filterElement.querySelector('.popup__title').textContent = data.offer.title;
  } else {
    filterElement.querySelector('.popup__title').remove();
  }

  if (data.offer.address.search(NaN) === 0) {
    filterElement.querySelector('.popup__text--address').remove();
  } else {
    filterElement.querySelector('.popup__text--address').textContent = data.offer.address;
  }

  if (data.offer.price) {
    filterElement.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  } else {
    filterElement.querySelector('.popup__text--price').remove();
  }

  if (data.offer.rooms >= 0 && data.offer.guests >= 0) {
    filterElement.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  } else {
    filterElement.querySelector('.popup__text--capacity').remove();
  }

  if (data.offer.checkin && data.offer.checkout) {
    filterElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  } else {
    filterElement.querySelector('.popup__text--time').remove();
  }

  if (OFFER_FEATURES.length === 0) {
    filterElement.querySelector('.popup__features').remove();
  } else {
    const features = data.offer.features;
    const featuresElement = filterElement.querySelector('.popup__features');
    featuresElement.replaceChildren();
    for (let i = 0; i < features.length; i++) {
      const li = document.createElement('li');
      featuresElement.appendChild(li).classList.add('popup__feature', `popup__feature--${features[i]}`);
    }
  }

  if (data.offer.description) {
    filterElement.querySelector('.popup__description').textContent = data.offer.description;
  } else {
    filterElement.querySelector('.popup__description').remove();
  }

  if (data.author.avatar) {
    filterElement.querySelector('.popup__avatar').src = `img/avatars/user${data.author.avatar}.png`;
  } else {
    filterElement.querySelector('.popup__avatar').remove();
  }

  return filterElement;
};

export {createSimilarElement};
