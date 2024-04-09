const repeatString = function (str, num) {
  return num < 0 ? new Error("Error") : str.repeat(num);
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
