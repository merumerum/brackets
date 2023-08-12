module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const couple = {};

  bracketsConfig.forEach(config => {
    couple[config[1]] = config[0];
  });
  for (const char of str) {
    if (char in couple) {
      if (stack.length === 0 || stack[stack.length - 1] !== couple[char]) {
        stack.push(char);
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}


// module.exports = 