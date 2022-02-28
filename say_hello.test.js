const sayHello = require('./say_hello');

test('if name is toomas, function returns "Hello Toomas!"', () => {
    expect(sayHello('toomas')).toBe('Hello Toomas!')
})