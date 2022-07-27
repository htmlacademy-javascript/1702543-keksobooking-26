import { markerGroup } from './map.js';

const OFFERS_COUNT = 10;
const DEFAULT_VALUE = 'any';
const PRICE_VALUE = {
  low: 0,
  middle: 10000,
  high: 50000,
};

const mapFiltersElement = document.querySelector('.map__filters');
const typeFilter = mapFiltersElement.querySelector('#housing-type');
const priceFilter = mapFiltersElement.querySelector('#housing-price');
const roomsFilter = mapFiltersElement.querySelector('#housing-rooms');
const guestsFilter = mapFiltersElement.querySelector('#housing-guests');
const featuresFilter = mapFiltersElement.querySelector('#housing-features');

const filterByType = (data) => typeFilter.value === DEFAULT_VALUE || data.offer.type === typeFilter.value;
const filterByRooms = (data) => roomsFilter.value === DEFAULT_VALUE || data.offer.rooms === Number(roomsFilter.value);
const filterByGuests = (data) => guestsFilter.value === DEFAULT_VALUE || data.offer.guests === Number(guestsFilter.value);

const filterByPrice = (data) => {
  if (priceFilter.value === 'low') {
    return data.offer.price < PRICE_VALUE.low;
  }
  if (priceFilter.value === 'middle') {
    return data.offer.price >= PRICE_VALUE.middle && data.offer.price <= PRICE_VALUE.high;
  }
  if (priceFilter.value === 'high') {
    return data.offer.price > PRICE_VALUE.high;
  }
  if (priceFilter.value === DEFAULT_VALUE) {
    return true;
  }
};

const filterByFeatures = (data) => {
  const checkedFeatures = Array.from(featuresFilter.querySelectorAll('input[type="checkbox"]:checked'));

  if(data.offer.features !== undefined) {
    return checkedFeatures.every((element) => data.offer.features.includes(element.value));
  }

  return false;
};


const filterOffers = (dataset) => {
  markerGroup.clearLayers();

  return dataset.filter((data) => (
    filterByType(data) &&
    filterByRooms(data) &&
    filterByGuests(data) &&
    filterByPrice(data) &&
    filterByFeatures(data)
  )).slice(0, OFFERS_COUNT);
};

const initFilters = (callback) => {
  mapFiltersElement.addEventListener('change', callback);
};

export {
  filterOffers,
  initFilters
};
