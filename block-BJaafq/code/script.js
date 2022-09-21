function addTwoNum(numA = 0, numB = 0) {
  if (typeof numA != `number` || typeof numB != `number`) {
    throw new Error("Check the Input Type");
  }
  return numA + numB;
}

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeEqual: function (expected) {
      if (actual != expected) {
        throw new Error(`${typeof actual} is not equal to ${expected}`);
      }
    },
  };
}

function test(message, callback) {
  try {
    callback();
    console.log(`Well Done ${message}`);
  } catch (error) {
    console.log(error);
    console.log(`Not Good`);
  }
}

test("add 10 + 10 to equal to 20", () => {
  expect(addTwoNum(10, 10)).toBeEqual(20);
});
