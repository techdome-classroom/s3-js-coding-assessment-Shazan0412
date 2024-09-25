/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};

module.exports = { isValid };

// Stack module
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Mapping module
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  // Validator module
  class Validator {
    isValid(s) {
      const stack = new Stack();
  
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (this.isOpenBracket(char)) {
          stack.push(char);
        } else {
          if (this.isInvalidClosingBracket(stack, char)) {
            return false;
          }
        }
      }
  
      return stack.isEmpty();
    }
  
    isOpenBracket(char) {
      return ['(', '{', '['].includes(char);
    }
  
    isInvalidClosingBracket(stack, char) {
      return stack.isEmpty() || mapping[char] !== stack.pop();
    }
  }
  
  
