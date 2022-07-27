import { sliderElement  } from './form-slider.js';
import { sendData } from './api.js';
import { mapReset } from './map.js';
import { previewReset } from './avatar.js';

const formElement = document.querySelector('.ad-form');
const typeElement = formElement.querySelector('[name="type"]');
const priceElement = formElement.querySelector('[name="price"]');
const roomsElement = formElement.querySelector('[name="rooms"]');
const capacityElement = formElement.querySelector('[name="capacity"]');
const timeInElement = formElement.querySelector('[name="timein"]');
const timeOutElement = formElement.querySelector('[name="timeout"]');
const submitButton = formElement.querySelector('.ad-form__submit');
const resetForms = formElement.querySelector('.ad-form__reset');
const formMap = document.querySelector('.map__filters');

const TYPE_MIN_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const MAX_GUESTS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

priceElement.placeholder = 1000;

const validateMinPrice = (value) => value >= TYPE_MIN_PRICES[typeElement.value];
const validateMaxPrice = () => priceElement.value <= 100000;

const getPriceErrorMessage = () => {
  if (typeElement.value === 'bungalow') {
    return 'Стоимость не менее 0 руб';
  }
  if (typeElement.value === 'flat') {
    return 'Стоимость не менее 1000 руб';
  }
  if (typeElement.value === 'hotel') {
    return 'Стоимость не менее 3000 руб';
  }
  if (typeElement.value === 'house') {
    return 'Стоимость не менее 5000 руб';
  }
  if (typeElement.value === 'palace') {
    return 'Стоимость не менее 10000 руб';
  }
};

const validateCapacity = () => MAX_GUESTS[roomsElement.value].includes(capacityElement.value);

const getCapacityErrorMessage = () => {
  if(roomsElement.value === '1') {
    return 'Разрешено заселить 1 гостя';
  }
  if(roomsElement.value === '2') {
    return 'Разрешено заселить 1-2 гостей';
  }
  if(roomsElement.value === '3') {
    return 'Разрешено заселить 1-3 гостей';
  }
  return 'Не для гостей';
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const formReset = () => {
  formElement.reset();
  formMap.reset();
  mapReset();
  sliderElement.noUiSlider.reset();
  previewReset();
};

const initValidation = (onSuccess, onError) => {
  const pristine = new Pristine(formElement, {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
  });

  pristine.addValidator(priceElement, validateMinPrice, getPriceErrorMessage);
  pristine.addValidator(priceElement, validateMaxPrice, 'Стоимость не более 100000 руб');
  pristine.addValidator(capacityElement, validateCapacity, getCapacityErrorMessage);

  typeElement.addEventListener('change', () => {
    if (priceElement.value) {
      pristine.validate(priceElement);
    }
    priceElement.placeholder = TYPE_MIN_PRICES[typeElement.value];
  });

  priceElement.addEventListener('change', () => {
    sliderElement.noUiSlider.set(priceElement.value);
  });

  timeInElement.addEventListener('change',() => {
    timeOutElement.value = timeInElement.value;
  });

  timeOutElement.addEventListener('change',() => {
    timeInElement.value = timeOutElement.value;
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if(isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          formReset();
        },
        () => {
          onError();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });

  resetForms.addEventListener('click', (evt) => {
    evt.preventDefault();
    formReset();
  });

  sliderElement.noUiSlider.on('slide', () => {
    priceElement.value = sliderElement.noUiSlider.get();
    pristine.validate(priceElement);
  });
};
export { initValidation, formReset };
