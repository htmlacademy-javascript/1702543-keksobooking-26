import { initValidation } from './form-validation.js';
import {
  showWarning,
  initSuccess,
  initError,
  debounce
} from './util.js';
import { disableMapFilters } from './form.js';
import { similarMarkers } from './map.js';
import { getData } from './api.js';
import { filterChange } from './filter.js';

getData(
  (data) =>{
    similarMarkers(data);
    filterChange(debounce(() => similarMarkers(data)));
  },
  (message) => {
    disableMapFilters();
    showWarning(message);
  }
);

initValidation(initSuccess, initError);
