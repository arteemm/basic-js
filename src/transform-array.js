import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error  ("'arr' parameter must be an instance of the Array!");
  }
  let arrayNew = arr.map(item => item);
  
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  let array = arrayNew.map((item, index) => {
    if (index === 0 && item === discardPrev) {
      item = false;
    } else if (item === discardNext) {
      item = false;
      arrayNew[index + 1] = false; 
    } else if (arrayNew[index + 1] === discardPrev) {
      item = false;
      arrayNew[index + 1] = false;
    } else if (item === doubleNext) {
      return item = arrayNew[index + 1];
    } else if (item === doublePrev) {
      return item = arrayNew[index - 1];
    } else {
      return item;
    }
  });
  let result = [];
  array.map(item => {
    if (item) {
      result.push(item);
    }
  });
  return result;
}
