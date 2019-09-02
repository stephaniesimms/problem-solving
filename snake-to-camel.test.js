const snakeToCamel = require("./snake-to-camel");

describe("#snakeToCamel", () => {
  test("passes_standard_cases", function () {
    expect(snakeToCamel("awesome_sauce")).toBe("awesomeSauce");
    expect(snakeToCamel("a_man_a_plan")).toBe("aManAPlan");
    expect(snakeToCamel("HOW_ABOUT_NOW?")).toBe("HOWABOUTNOW?");
  });
});
