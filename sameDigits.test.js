const sameDigits = require("./sameDigits");

// We can assume input values are positive so no test for negative integers
describe("#sameDigits", function() {
  test("should_return_true_for_same_frequency", function() {
    expect(sameDigits(182, 281)).toBe(true);
    expect(sameDigits(3589578, 5879385)).toBe(true);
  });
  test("should_return_false_for_different_frequency", function() {
    expect(sameDigits(34, 14)).toBe(false);
    expect(sameDigits(22, 222)).toBe(false);
  });
  test("should_return_NaN_for_invalid_inputs", function() {
    expect(sameDigits("", "")).toBeNaN();
    expect(sameDigits("hello", "hello")).toBeNaN();
    expect(sameDigits("hello", 42)).toBeNaN();
    expect(sameDigits(undefined, undefined)).toBeNaN();
  });
});



