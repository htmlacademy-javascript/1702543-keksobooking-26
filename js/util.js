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

const getRandomNumberOfRange = (arr) => getRandomNumber(arr[0], arr[1]);

export {
  getRandomFloatPoint,
  getRandomNumber,
  getShuffledArray,
  getRandomArrayElement,
  getRandomNumberOfRange
};
