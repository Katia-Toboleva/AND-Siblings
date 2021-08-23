const findAndSiblings = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  return arr.reduce((acc, currentVal, index) => {
    // Find an array of remaining values (without currentVal).
    const remainingVal = [...arr.slice(0, index), ...arr.slice(index + 1)];

    // Find all possible combinations by calling findAndSiblings(arr) function recursively.
    const combinations = findAndSiblings(remainingVal)
      .map(item => [currentVal, ...item]
        .join(''));

    return [...acc, ...combinations];
  }, []);
};

const solution = (input) => {
  try {
    // Convert input into an array and filter integers only.
    const integers = [...input].filter(item => Number.isInteger(parseInt(item)));

    // Throw an error if no itegers found.
    if (!integers.length) {
      throw Error('No integers found!');
    }

    // Find all AND-Siblings using a recursive function.
    const andSiblings = findAndSiblings(integers);

    // Return a string of AND-Siblings sorted in descending order.
    return andSiblings.sort((a, b) => b - a).join(',');

  } catch (error) {
    console.error(error.message);
  }
};

// some example inputs
console.log(solution('236')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // throws an error

/* NOTES:
1. Abstracted recursive function findAndSiblings() for better readability and testability.
2. Used arrow functions following ES6 syntax.
*/