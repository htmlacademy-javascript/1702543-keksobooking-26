import {formElement} from './form-validation.js';

formElement.classList.add('ad-form--disabled');
const fieldsetElement = formElement.querySelectorAll('fieldset');
const mapFiltersElement = document.querySelector('.map__filters');
mapFiltersElement.classList.add('ad-form--disabled');
const mapFormElement = mapFiltersElement.querySelectorAll('[id^="housing-"]');

const getDisabled = (selector, disabled) => {
  selector.forEach((element) => {
    if (disabled) {
      return element.setAttribute('disabled', '');
    }
    return element.removeAttribute('disabled');
  });
};

getDisabled(mapFormElement, true);
getDisabled(fieldsetElement, true);

export {
  getDisabled,
  mapFormElement,
  fieldsetElement,
  mapFiltersElement,
};

