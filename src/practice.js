const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.substr(1);
};

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => {
    if (num1 <= 0 || num2 <= 0) return "Error";
    return num1 / num2;
  },
  multiply: (num1, num2) => num1 * num2,
};

const caesarCipher = (string, shiftKey) => {
  let cipheredText = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/)) {
      cipheredText += String.fromCharCode(
        ((string[i].charCodeAt(0) - 97 + shiftKey) % 26) + 97
      );
    } else if (string[i].match(/[A-Z]/)) {
      cipheredText += String.fromCharCode(
        ((string[i].charCodeAt(0) - 65 + shiftKey) % 26) + 65
      );
    } else {
      cipheredText += string[i];
    }
  }
  return cipheredText;
};

const analyzeArray = (arr) => {
  const length = arr.length;
  const average =
    arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / length;

  const max = arr.sort((a, b) => b - a)[0];
  const min = arr.sort((a, b) => a - b)[0];
  return {
    average,
    min,
    max,
    length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
