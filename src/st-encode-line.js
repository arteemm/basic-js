import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  let word ='';
  let letter = '';
  let count = 1;
  for (let i = 0; i <= str.length - 1; i++) {
    letter = str[i];
    if (str[i] === str [i + 1]) {
      count ++;
    } else {
      if (count > 1) {
      word +=count + letter;
    } else {
      word += letter;
    }
      letter = '';
      count = 1;
    }
  }
  return word;
}
