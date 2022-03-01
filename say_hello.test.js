const sayHello = require('./say_hello');

describe('Say hello', () => {
  test('Jan Kängsepp', () => {
    expect(sayHello('jan kängsepp')).toBe('Hello Jan Kängsepp!');
  });
  test('Artur Liimann', () => {
    expect(sayHello('artur liimann')).toBe('Hello Artur Liimann!');
  });
  test('Harri Allmann', () => {
    expect(sayHello('harri allmann')).toBe('Hello Harri Allmann!');
  });
});
