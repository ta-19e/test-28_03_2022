const say_hello = require("./say_hello");
describe( 'Say hello', ()=> {
    test('Jan Kängsepp', ()=> {
        expect(say_hello('jan kängsepp')).toBe("Hello Jan Kängsepp!")  
    })
    test('Artur Liimann', ()=> {
        expect(say_hello('artur liimann')).toBe("Hello Artur Liimann!")  
    })
    test('Harri Allmann', ()=> {
        expect(say_hello('harri allmann')).toBe("Hello Harri Allmann!")  
    })
})