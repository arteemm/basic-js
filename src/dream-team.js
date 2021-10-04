import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let world = members.reduce((acc, item) => {
    if (typeof item === 'string') {
      let x = item.toUpperCase().trim();
      acc += x[0];
    }
    return acc;
  },0);
  if (!world) {
    return false;
  }
  world = world.slice(1, members.length+1);
  world = world.split('');
  return world.sort().join('');
}
