import { initValidation } from './form-validation.js';
import {
  showWarning,
  initSuccess,
  initError,
  debounce
} from './util.js';
import { disableMapFilters } from './form.js';
import { renderMarkers } from './map.js';
import { getData } from './api.js';
import { initFilters } from './filter.js';
import './avatar.js';

getData(
  (offers) =>{
    renderMarkers(offers);
    initFilters(debounce(() => renderMarkers(offers)));
  },
  (message) => {
    disableMapFilters();
    showWarning(message);
  }
);

initValidation(initSuccess, initError);
