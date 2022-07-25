const OFFER_TYPES_RUS = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const createPopup = (data) => {
  const popup = popupTemplate.cloneNode(true);

  if (data.offer.type) {
    popup.querySelector('.popup__type').textContent = OFFER_TYPES_RUS[data.offer.type];
  } else {
    popup.querySelector('.popup__type').remove();
  }

  if (data.offer.photos) {
    const photoData = popup.querySelector('.popup__photo');
    const photoAll = data.offer.photos;
    for (let i = 0; i < photoAll.length; i++) {
      const photoClone = photoData.cloneNode(true);
      photoClone.src = photoAll[i];
      popup.querySelector('.popup__photos').append(photoClone);
    }
    photoData.remove();
  } else {
    popup.querySelector('.popup__photos').remove();
  }

  if (data.offer.title) {
    popup.querySelector('.popup__title').textContent = data.offer.title;
  } else {
    popup.querySelector('.popup__title').remove();
  }

  if (data.offer.address.search(NaN) === 0) {
    popup.querySelector('.popup__text--address').remove();
  } else {
    popup.querySelector('.popup__text--address').textContent = data.offer.address;
  }

  if (data.offer.price) {
    popup.querySelector('.popup__text--price').innerHTML = `${data.offer.price} <span>₽/ночь</span>`;
  } else {
    popup.querySelector('.popup__text--price').remove();
  }

  if (data.offer.rooms >= 0 && data.offer.guests >= 0) {
    popup.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  } else {
    popup.querySelector('.popup__text--capacity').remove();
  }

  if (data.offer.checkin && data.offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  } else {
    popup.querySelector('.popup__text--time').remove();
  }

  if (data.offer.features) {
    const features = data.offer.features;
    const featuresElement = popup.querySelector('.popup__features');
    featuresElement.replaceChildren();
    for (let i = 0; i < features.length; i++) {
      const li = document.createElement('li');
      featuresElement.appendChild(li).classList.add('popup__feature', `popup__feature--${features[i]}`);
    }
  } else {
    popup.querySelector('.popup__features').remove();
  }

  if (data.offer.description) {
    popup.querySelector('.popup__description').textContent = data.offer.description;
  } else {
    popup.querySelector('.popup__description').remove();
  }

  if (data.author.avatar) {
    popup.querySelector('.popup__avatar').src = data.author.avatar;
  } else {
    popup.querySelector('.popup__avatar').remove();
  }

  return popup;
};

export {
  createPopup
};
