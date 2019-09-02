const romanToInteger = require("./roman-to-integer");

describe("#romanToInteger", function () {
  // Failure message:
  // romanToInteger should convert roman numerals that only require addition of numerals
  test("should_return_converted_roman_numeral_only_addition", function () {
    expect(romanToInteger("VI")).toBe(6);
    expect(romanToInteger("DCL")).toBe(650);
    expect(romanToInteger("MDCLXVI")).toBe(1666);
  });
  // Failure message:
  // romanToInteger should convert roman numerals that require adding and subtracting numerals
  test("should_return_converted_roman_numeral_add_and_subtract", function () {
    expect(romanToInteger("IV")).toBe(4);
    expect(romanToInteger("IX")).toBe(9);
    expect(romanToInteger("MCMXCIV")).toBe(1994);
  });
  // Failure message:
  // romanToInteger should return NaN for inputs that do not consist of roman numerals
  test("should_return_NaN_for_invalid_inputs", function () {
    expect(romanToInteger("ABCD")).toBeNaN();
    expect(romanToInteger(NaN)).toBeNaN();
    expect(romanToInteger(42)).toBeNaN();
    expect(romanToInteger(undefined)).toBeNaN();
  });
  // Failure message:
  // romanToInteger should return 0 for an empty string input
  test("should_return_0_for_empty_string", function () {
    expect(romanToInteger("")).toBe(0);
  });
});


