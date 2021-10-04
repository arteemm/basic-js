import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options ) {
  if (str === null) {
    str = 'null';
  }
  str= str.toString();
  let addition;
  if (options.addition || options.addition === false || options.addition === null){
  addition = options.addition;
  if (addition === null) {
    addition = 'null';
  }
  addition = addition.toString();
}
 let arr = [];
 
 let i = 0;
if (!options.additionRepeatTimes && !options.repeatTimes){
  return str + addition;
}
 while(i < options.additionRepeatTimes){
    arr.push(addition);
    i++
 }

 i = 0;

 while(i<arr.length-1){
    arr[i] = arr[i]+(options.additionSeparator || '|');
    i++
 }

let dopStr = arr.join('');
dopStr =str + dopStr;
 i = 0;
 let array =[];
while(i < options.repeatTimes){

   array.push(dopStr);
   i++;
}
i=0;
while( i < array.length-1){
    array[i] = array[i] + (options.separator || '+');
    i++
}
array = array.join('');

  

return array;
}
