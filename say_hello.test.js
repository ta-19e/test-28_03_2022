const sayHello = require('./say_hello');

const names = ['Jan Kängsepp', 'Artur Liimann', 'Harri Allmann'];

describe('Say hello', () => {
  names.forEach((name) => {
    test(name, () => {
      expect(sayHello(name.toLowerCase())).toBe(`Hello ${name}!`);
    });
  });
});
