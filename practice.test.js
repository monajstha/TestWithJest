import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

test("Capitalizes pencil to equal Pencil", () => {
  expect(capitalize("pencil")).toBe("Pencil");
});

test("Capitalizes '' to equal ''", () => {
  expect(capitalize("")).toBe("");
});

test("Reverses Hello to equal olleH", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Reverses '' to equal ''", () => {
  expect(reverseString("")).toBe("");
});

test("Adds 20 + 45 to equal 65 ", () => {
  expect(calculator.add(20, 45)).toBe(65);
});

test("Adds 0.1 + 0.2 to equal 0.3 ", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Subtracts 60 - 30 to equal 30 ", () => {
  expect(calculator.subtract(60, 30)).toBe(30);
});

test("Muliplies 13 * 3 to equal 39 ", () => {
  expect(calculator.multiply(13, 3)).toBe(39);
});

test("Divides 60 / 3 to equal 20 ", () => {
  expect(calculator.divide(60, 3)).toBe(20);
});

test("Divides 0 / 60 to equal 20 ", () => {
  expect(calculator.divide(60, 0)).toBe("Error");
});

// caesarCipher
test("Ciphers 'xyz' with shift of 3 to equal 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Ciphers 'HeLLo' with shift of 3 to equal 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Ciphers 'HeLLo, World!' with shift of 3 to equal 'KhOOr, Zruog!'", () => {
  expect(caesarCipher("HeLLo, World!", 3)).toBe("KhOOr, Zruog!");
});

// Analyze array
test("Analyzes an array to return an object with average, min, max and length as properties", () => {
  expect(analyzeArray([1, 8, 3, 2, 4, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
