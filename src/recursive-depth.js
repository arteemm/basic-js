import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth( arr, count = 0 ) {
    if (arr.length === 0) {
      return count;
    } else {
      let b= [];
       arr.map(item => {
        if(Array.isArray(item) && item.length != 0) {
          for (let i = 0; i <= item.length - 1; i++) {
            b.push(item[i]);
          }
        } else if(Array.isArray(item) && item.length === 0) {
          b.push(1);
        }
      });
     return  this.calculateDepth (b , count =  count + 1)
    }
  }
}
