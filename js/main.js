import { offers } from './data.js';
import { createSimilarElement } from './generating-popup.js';

const card = offers();
const map = document.querySelector('.map__canvas');

map.appendChild(createSimilarElement(card[0]));
