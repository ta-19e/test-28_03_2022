var single = 'single';
var capitalize = require('capitalize');

function sayHello(name) {
    return 'Hello' + capitalize.words(name) + '!';
}

module.exports = sayHello