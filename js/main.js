import { offers } from './data.js';
import { createSimilarElement } from './generating-popup.js';
import './form-validation.js';

const card = offers();
const map = document.querySelector('.map__canvas');

map.appendChild(createSimilarElement(card[0]));
