// Merge the original dict with custom dict to one file.

const origi = require('./phrases-dict');
const custom = require('./phrases-dict-custom');

function merge() {
    "use strict";
    var newData = {};
    for( var data in origi) {
        newData[data] = origi[data];
    }
    for( var data in custom) {
        newData[data] = custom[data];
    }
    
    return newData;
}

module.exports = merge();