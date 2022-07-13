const formElement = document.querySelector('.ad-form');

const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const priceElement = formElement.querySelector('#price');
const getPriceValidate = () => priceElement.value <= 100000;

pristine.addValidator(priceElement, getPriceValidate, 'Максимальная цена за ночь: 100000 руб.');

const roomsElement = formElement.querySelector('[name="rooms"]');
const capacityElement = formElement.querySelector('[name="capacity"]');
const maxGuests = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const getValidateCapacity = () => maxGuests[roomsElement.value].includes(capacityElement.value);

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

pristine.addValidator(capacityElement, getValidateCapacity, getCapacityErrorMessage);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
