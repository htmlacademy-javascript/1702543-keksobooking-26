const formElement = document.querySelector('.ad-form');
const fieldsetElement = formElement.querySelectorAll('fieldset');
const mapFiltersElement = document.querySelector('.map__filters');
const mapFormElement = mapFiltersElement.querySelectorAll('[id^="housing-"]');

const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  fieldsetElement.forEach((element) => element.setAttribute('disabled', true));
};

const disableMapFilters = () => {
  mapFiltersElement.classList.add('ad-form--disabled');
  mapFormElement.forEach((element) => element.setAttribute('disabled', true));
};

const enableForm = () => {
  formElement.classList.remove('ad-form--disabled');
  fieldsetElement.forEach((element) => element.removeAttribute('disabled'));
};

const enableMapFilters = () => {
  mapFiltersElement.classList.remove('ad-form--disabled');
  mapFormElement.forEach((element) => element.removeAttribute('disabled'));
};

disableForm();

export {
  disableForm,
  disableMapFilters,
  enableForm,
  enableMapFilters,
};

