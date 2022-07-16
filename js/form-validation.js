export const formElement = document.querySelector('.ad-form');

const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

// Валидация цены
const typeElement = formElement.querySelector('[name="type"]');
const priceElement = formElement.querySelector('[type="number"]');
priceElement.placeholder = 1000;
const TYPE_MIN_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const getPriceValidate = (value) => value >= TYPE_MIN_PRICES[typeElement.value];

const getPriceErrorMessage = () => {
  if (typeElement.value === 'bungalow') {
    return 'стоимость не менее 0 руб';
  }
  if (typeElement.value === 'flat') {
    return 'стоимость не менее 1000 руб';
  }
  if (typeElement.value === 'hotel') {
    return 'стоимость не менее 3000 руб';
  }
  if (typeElement.value === 'house') {
    return 'стоимость не менее 5000 руб';
  }
  if (typeElement.value === 'palace') {
    return 'стоимость не менее 10000 руб';
  }
};

const getMinPlaceholder = () => {
  if (priceElement.value) {
    pristine.validate(priceElement);
  }

  priceElement.placeholder = TYPE_MIN_PRICES[typeElement.value];
};

typeElement.addEventListener('change', getMinPlaceholder);
pristine.addValidator(priceElement, getPriceValidate, getPriceErrorMessage);

// Слайдер для цены
const sliderElement = formElement.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 10,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value;
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return value;
    },
  },
});

sliderElement.noUiSlider.on('slide', () => {
  getMinPlaceholder();
  priceElement.value = sliderElement.noUiSlider.get();
  pristine.validate(priceElement);
});

priceElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set(priceElement.value);
});

sliderElement.setAttribute('disabled', false);

// Валидация комнат на количество гостей
const roomsElement = formElement.querySelector('[name="rooms"]');
const capacityElement = formElement.querySelector('[name="capacity"]');
const MAX_GUESTS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const getCapacityValidate = () => MAX_GUESTS[roomsElement.value].includes(capacityElement.value);

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

pristine.addValidator(capacityElement, getCapacityValidate, getCapacityErrorMessage);

// Валидация время заезда и выезда
const timeInElement = formElement.querySelector('[name="timein"]');
const timeOutElement = formElement.querySelector('[name="timeout"]');

timeInElement.addEventListener('change',() => {
  timeOutElement.value = timeInElement.value;
});

timeOutElement.addEventListener('change',() => {
  timeInElement.value = timeOutElement.value;
});

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {sliderElement};
