import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 export default function dateSample(n) {
  if (typeof n !== 'string' || isNaN(n) || !n || n == false){
    return false;
  }
  if(+n > 15 || +n <=0){
    return false;
  }
 // throw new CustomError('Not implemented');
let time = Math.log(MODERN_ACTIVITY / +n ) / (0.693 /HALF_LIFE_PERIOD );
return Math.ceil(time);
}