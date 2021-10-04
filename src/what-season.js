import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  if (date === null){
    throw Error;
  }
 
  if (date === undefined){
   return 'Unable to determine the time of year!';
  }
  
  let d = date.getMonth();
  if(d >1 && d < 5){
    return 'spring'
  } 
  if(d >4 && d < 8){
    return 'summer'
  }
  if(d >7 && d < 11){
    return 'autumn'
  }
  if ((d >10 && d <= 11) || d === 0){
    return 'winter'
  }
  return 'winter';
  
}
