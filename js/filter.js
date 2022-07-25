import { markerGroup } from './map.js';

const mapFiltersElement = document.querySelector('.map__filters');
const typeFilter = mapFiltersElement.querySelector('#housing-type');
const priceFilter = mapFiltersElement.querySelector('#housing-price');
const roomsFilter = mapFiltersElement.querySelector('#housing-rooms');
const guestsFilter = mapFiltersElement.querySelector('#housing-guests');
const featuresFilter = mapFiltersElement.querySelector('#housing-features');

const OFFERS_COUNT = 10;
const DEFAULT_VALUE = 'any';
const PRICE_VALUE = {
  low: 0,
  middle: 10000,
  high: 50000,
};

const getFilterType = (data) => typeFilter.value === DEFAULT_VALUE || data.offer.type === typeFilter.value;
const getFilterRooms = (data) => roomsFilter.value === DEFAULT_VALUE || data.offer.rooms === Number(roomsFilter.value);
const getFilterGuests = (data) => guestsFilter.value === DEFAULT_VALUE || data.offer.guests === Number(guestsFilter.value);

const getFilterPrice = (data) => {
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

const getFilterFeatures = (data) => {
  const checkedFeatures = Array.from(featuresFilter.querySelectorAll('input[type="checkbox"]:checked'));

  if(data.offer.features !== undefined) {
    return checkedFeatures.every((element) => data.offer.features.includes(element.value));
  }

  return false;
};


const getFilterAll = (dataset) => {
  markerGroup.clearLayers();

  return dataset.filter((data) => (
    getFilterType(data) &&
    getFilterRooms(data) &&
    getFilterGuests(data) &&
    getFilterPrice(data) &&
    getFilterFeatures(data)
  )).slice(0, OFFERS_COUNT);
};

const filterChange = (cb) => {
  mapFiltersElement.addEventListener('change', cb);
};

export {
  getFilterAll,
  filterChange
};
