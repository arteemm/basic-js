import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain( email ) {
  const str = /@\w{1,}.\w{1,}.\w{1,}/gi;
  const arr = email.match(str);
  const array = arr.join('').split('').splice(1);
  return array.join('');
}
