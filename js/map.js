import {
  getDisabled,
  mapFormElement,
  fieldsetElement,
  mapFiltersElement
} from './form-disabled.js';

import {
  dataset,
  createSimilarElement
} from './generating-popup.js';

import {
  formElement,
  sliderElement
} from './form-validation.js';


const START_LATITUDE = 35.68260;
const START_LONGITUDE = 139.75305;

const map = L.map('map-canvas').on('load', () => {
  formElement.classList.remove('ad-form--disabled');
  mapFiltersElement.classList.remove('ad-form--disabled');
  sliderElement.removeAttribute('disabled');
  getDisabled(mapFormElement, '');
  getDisabled(fieldsetElement, '');
})
  .setView({
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

const addressElement = document.querySelector('[name="address"]');
addressElement.value = `${START_LATITUDE}, ${START_LONGITUDE}`;
addressElement.setAttribute('readOnly', '');

mainMarker.on('drag', (evt) => {
  addressElement.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const ordinaryPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

dataset.forEach((element) => {
  const {location} = element;
  const ordinaryMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: ordinaryPinIcon,
    },
  );
  ordinaryMarker
    .addTo(map)
    .bindPopup(createSimilarElement(element));
});

