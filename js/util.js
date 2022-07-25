function getRandomFloatPoint (a, b, digits) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const random = Math.random() * (upper - lower) + lower;
  return +random.toFixed(digits);
}

function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function getShuffledArray(selectedArray) {
  const maxLength = selectedArray.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  for(let i = 0; i < lengthOfArray; i++) {
    const indexOfElement = getRandomNumber(0, selectedArray.length - 1);
    const element = selectedArray[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}

const getRandomArrayElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const showWarning = (message) => {
  const alertContainer = document.createElement('div');
  const messageText = document.createElement('p');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px 0';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  messageText.style.fontSize = '15px';

  messageText.textContent = 'Ошибка подключения. Обновите страницу через несколько секунд.';
  alertContainer.textContent = message;

  alertContainer.append(messageText);
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const initSuccess = () => {
  const message = successTemplate.cloneNode(true);

  document.body.append(message);

  document.addEventListener('click', () => {
    message.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      message.remove();
    }
  });
};

const initError = () => {
  const message = errorTemplate.cloneNode(true);
  const buttonError = message.querySelector('.error__button');

  document.body.append(message);

  buttonError.addEventListener('click', () => {
    message.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      message.remove();
    }
  });
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getRandomFloatPoint,
  getRandomNumber,
  getShuffledArray,
  getRandomArrayElement,
  showWarning,
  initSuccess,
  initError,
  debounce
};
