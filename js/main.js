import { initValidation } from './form-validation.js';
import {
  showWarning,
  initSuccess,
  initError
} from './util.js';
import {
  disableForm,
  disableMapFilters,
  enableForm,
  enableMapFilters,
} from './form.js';
import {
  initMap,
  renderMarkers
} from './map.js';
import {
  initSlider,
  enableSlider
} from './form-slider.js';
import { getData  } from './api.js';

const OFFERS_COUNT = 10;

disableForm();
disableMapFilters();
initSlider();
initValidation(initSuccess, initError);

initMap(() => {
  enableSlider();
  enableForm();
  enableMapFilters();
});

getData(
  (data) =>{
    renderMarkers(data.slice(0, OFFERS_COUNT));
  },
  (message) => {
    disableMapFilters();
    showWarning(message);
  }
);
