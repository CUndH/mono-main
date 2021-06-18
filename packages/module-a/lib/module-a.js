'use strict';

module.exports = moduleA;

const moduleB = require('module-b');

function moduleA() {
    // TODO
    console.log(moduleB())
}
