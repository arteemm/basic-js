import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr ) {
  const filter = arr.map((item, index) => {
    if (item === -1) {
      return arr[index];
    }
    return false;
  });

  const array = arr.filter((item) => {
    if (item !== -1) {
      return true;
    }
    return false;
  });
  array.sort((a, b) => a - b);
  let index = -1;
  const filterArray = filter.map((x) => {
    if (!x) {
      index++;
      return array[index];
    }
    return x;
  });

  return filterArray;
}
