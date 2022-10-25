// import function from local file
const findShortestString = require("./find-longest-string");

test("findShortestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findShortestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["hi", "below"])).toBe("hi");
  expect(findShortestString(["I", "am", "Iron-Man"])).toBe("I");
});