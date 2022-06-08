// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber (minRange, maxRange) {
  if (minRange < 0) {
    return 'Ошибка. Число должно быть положительное.';
  } else if (maxRange <= minRange) {
    return 'Ошибка. Первое число должно быть меньше второго.';
  }

  return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
}

getRandomNumber(2, 4);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloatPoint (minRange, maxRange, amountSymbol) {
  if (minRange < 0) {
    return 'Ошибка. Число должно быть положительное.';
  } else if (maxRange <= minRange) {
    return 'Ошибка. Первое число должно быть меньше второго.';
  }

  const random = Math.random() * (maxRange - minRange + 1) + minRange;
  return +random.toFixed(amountSymbol);
}

getRandomFloatPoint(2, 5, 3);
