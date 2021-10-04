import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits( n ) {
  const str = n.toString();
  const arr = str.split('');
  /* eslint-disable no-param-reassign */
  const sum = arr.reduce((acc, item) => {
    acc += +item;
    return acc;
  }, 0);
  /* eslint-enable no-param-reassign */
  if (sum >= 10) {
    return getSumOfDigits(sum);
  }
  return sum;
}
