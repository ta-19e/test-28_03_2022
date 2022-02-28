const chalk = require('chalk');
const assert = require('assert');

const sayHello = require('./say_hello.js');

// test how function works
console.log(say_hello('jaan'));
// use also colors to be more "fancy"
console.log(chalk.yellow('mari: '), chalk.bold.green(sayHello('mari')));
console.log(chalk.yellow('kaja kallas: '), chalk.bold.green(sayHello('kaja kallas')));

// examples of testing using assert
assert.equal(sayHello('mari'), 'Hello Mari!');
assert.equal(sayHello('kaja kallas'), 'Hello Kaja Kallas!');

assert.notEqual(sayHello('mati'), 'bye mati');
