const DEBOUNCE_TIMEOUT_DELAY = 500;
const HIDE_ERROR_TIMEOUT = 5000;

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

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
  }, HIDE_ERROR_TIMEOUT);
};

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

  document.body.append(message);

  message.querySelector('.error__button').addEventListener('click', () => {
    message.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      message.remove();
    }
  });
};

const debounce = (callback, timeoutDelay = DEBOUNCE_TIMEOUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  showWarning,
  initSuccess,
  initError,
  debounce
};
