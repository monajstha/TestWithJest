const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.substr(1);
};

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

const isCharAlphabet = (character, shift = 3) => {
  const charCode = character.charCodeAt(0);
  if (charCode >= 65) {
    //   For albhabets
    let index = charCode + shift;
    if (index > 122) {
      index = 96 + (index - 122);
    }
    return index;
  }
  //   For non albhabets return false
  return false;
};

const caesarCipher = (word, shift) => {
  let cipheredText = "";
  for (let i = 0; i < word.length; i++) {
    // For non alphabetical characters
    if (!isCharAlphabet(word[i])) {
      cipheredText += word[i];
      continue;
    }

    cipheredText += String.fromCharCode(isCharAlphabet(word[i]));
  }
  return cipheredText;
};

const analyzeArray = (arr) => {
  const length = arr.length;
  const average =
    arr.reduce((acc, curr) => {
      const sum = acc + curr;
      return sum;
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
