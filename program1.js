/* 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  function isValid(s) {
    const stack = [];
    const mapping = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if (stack.length === 0 || mapping[char] !== stack.pop()) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
};

module.exports = { isValid };

  
  
