import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(message, key) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();
    var encryptWord = "";
    let p =message;
    let k = key;
  
  let j = p.length - k.length;
      let b =0;
   
      while(b < j){
        
        k += k[b];
        b ++
    }
  let c = 0;
    for (var i = 0;i < p.length;i++) {
      
      if(alphabet.indexOf(p[i])< 0){
        
        encryptWord += p[i];
        c +=1;
        continue;
      } else {
      let x = Math.abs(alphabet.indexOf(p[i]) + alphabet.indexOf(k[i-c]));
      while(x >=26){
        x-= 26;
      }
     encryptWord += alphabet[x];
   }
    }
    return encryptWord;
  }
  decrypt(encryptedMessage, key) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    key = key.toUpperCase();
  var encryptWord = "";
  let p =encryptedMessage;
  let k = key;

let j = p.length - k.length;
    let b =0;
 
    while(b < j){
      
      k += k[b];
      b ++
  }
let c = 0;
  for (var i = 0;i < p.length;i++) {
    
    if(alphabet.indexOf(p[i])< 0){
      
      encryptWord += p[i];
      c +=1;
      continue;
    } else {
    let x = Math.abs(alphabet.indexOf(p[i]) - alphabet.indexOf(k[i-c])+26);
    
    while(x >=26){
      x-= 26;
    }
   encryptWord += alphabet[x];
 }
  }
  return encryptWord;
  }
}
