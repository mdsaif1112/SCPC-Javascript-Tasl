// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const makeReverse = (str) => {
  const reverseArray = [];

  for (let i = str.length - 1; i >= 0; i--) {
    const character = str[i];
    reverseArray.push(character);
  }

  const reverseStr = reverseArray.join("");

  return reverseStr;
};

const reverseStr = makeReverse("Jubayer hossain");

console.log(reverseStr);