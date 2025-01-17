var u = require('./helpers/test.utils.js');
var utils = require('../packages/web3-utils');

describe('utils', function () {
    describe('methods', function () {
        u.methodExists(utils, 'sha3');
        u.methodExists(utils, 'hexToAscii');
        u.methodExists(utils, 'asciiToHex');
        u.methodExists(utils, 'hexToNumberString');
        u.methodExists(utils, 'numberToHex');
        u.methodExists(utils, 'toTinybar');
        u.methodExists(utils, 'fromTinybar');;
        u.methodExists(utils, 'toBN');
        u.methodExists(utils, 'isAddress');
        u.methodExists(utils, 'soliditySha3');
        u.methodExists(utils, 'encodePacked');
        u.methodExists(utils, 'stripHexPrefix');
    });
});
