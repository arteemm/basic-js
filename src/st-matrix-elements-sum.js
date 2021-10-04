import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  const ind = matrix[0].length;
  const arr = [];
  matrix.map((item) => {
    for (let j = 0; j <= item.length - 1; j++) {
      arr.push(item[j]);
    }
    return item;
  });
  if (ind === 1) {
    /* eslint-disable no-param-reassign */
    const sum = arr.reduce((acc, item, index) => {
      const x = arr.indexOf(0);
      if (index < x) {
        acc += item;
      }
      /* eslint-enable no-param-reassign */
      return acc;
    }, 0);
    return sum;
  }
  for (let i = 0; i <= arr.length - (1 + ind); i++) {
    if (arr[i] === 0) {
      arr[i + 4] = 0;
    }
  }
  /* eslint-disable no-param-reassign */
  const sum = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  /* eslint-enable no-param-reassign */
  return sum;
}
