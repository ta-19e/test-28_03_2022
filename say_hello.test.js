const sayHello = require('./say_hello');

test('test say_hello with name Asko', () => {
  expect(sayHello('Asko')).toBe('Hello Asko!');
});
