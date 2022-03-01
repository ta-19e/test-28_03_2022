const sayHello = require('./say_hello');

const names = ['Jan Kängsepp', 'Artur Liimann', 'Harri Allmann'];

describe('Say hello', () => {
  test.each([
    ['jan kängsepp', 'Hello Jan Kängsepp!'],
    ['artur liimann', 'Hello Artur Liimann!'],
    ['siim tiilen', 'Hello Siim Tiilen!'],
  ])('sayHello to "%s" is "%s"', (input, expected) => {
    expect(sayHello(input)).toBe(expected);
  });
});
