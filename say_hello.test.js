const say_hello = require("./say_hello");

test("say hello to Artur", () => {
  expect(say_hello("Artur")).toBe("Hello Artur!");
});
