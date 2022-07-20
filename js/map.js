import { createPopup } from './popup.js';

const addressElement = document.querySelector('[name="address"]');
addressElement.setAttribute('readOnly', 'true');
const ZOOM_LEVEL = 12;
const mapCenter = {
  lat: 35.68260,
  lng: 139.75305,
};

let map = null;

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: mapCenter.lat,
    lng: mapCenter.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setAddressValue = (value) => {
  addressElement.value = value;
};
mainMarker.on('drag', (evt) => {
  setAddressValue(`${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`);
});

const ordinaryPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMarkers = (offers) => {
  offers.forEach((offer) => {
    const {location} = offer;
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
      .bindPopup(createPopup(offer));
  });
};

const initMap = (onLoad) => {
  map = L.map('map-canvas').on('load', onLoad)
    .setView({
      lat: mapCenter.lat,
      lng: mapCenter.lng,
    }, ZOOM_LEVEL);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  setAddressValue(`${mapCenter.lat}, ${mapCenter.lng}`);

  mainMarker.addTo(map);
};

const mapReset = () => {
  map.closePopup();
  map.setView({
    lat: mapCenter.lat,
    lng: mapCenter.lng,
  }, ZOOM_LEVEL);
  addressElement.value = `${mapCenter.lat.toFixed(5)}, ${mapCenter.lng.toFixed(5)}`;
  mainMarker.setLatLng({
    lat: mapCenter.lat,
    lng: mapCenter.lng});
};

export {
  initMap,
  renderMarkers,
  mapReset
};
