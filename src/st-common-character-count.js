import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  let count = 0;
  let arr = s2.split('');
  for (let i = 0; i <= s1.length -1; i++) {
    if (arr.indexOf(s1[i]) >= 0) {
      count++;
       arr[arr.indexOf(s1[i])] = '';
      s1 =  s1.slice(i);
      i = 0;
    }
  }
  return count;
}
