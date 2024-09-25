/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function romanToInt(s) {
        const romanMap = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000
        };
      
        let result = 0;
        for (let i = 0; i < s.length; i++) {
          const currentChar = s[i];
          const nextChar = s[i + 1];
          if (romanMap[currentChar] < romanMap[nextChar]) {
            result -= romanMap[currentChar];
          } else {
            result += romanMap[currentChar];
          }
        }
      
        return result;
      }
};


module.exports={romanToInt}