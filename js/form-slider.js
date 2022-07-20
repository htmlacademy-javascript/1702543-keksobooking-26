const sliderElement = document.querySelector('.ad-form__slider');

const disableSlider = () => {
  sliderElement.setAttribute('disabled', true);
};

const enableSlider = () => {
  sliderElement.removeAttribute('disabled');
};


const initSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 0,
    step: 10,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value;
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return value;
      },
    },
  });

  disableSlider();
};

export {
  initSlider,
  enableSlider,
  disableSlider,
  sliderElement
};
