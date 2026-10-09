// Deze tests controleren de rekenvoorbeelden die bezoekers kunnen uitproberen.
const test = require('node:test');
const assert = require('node:assert/strict');
let helpers = {};
try { helpers = require('../script.js'); } catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}
test('binaire bits geven het juiste decimale getal', () => {
  assert.equal(typeof helpers.binaryToDecimal, 'function', 'De binaire rekenfunctie ontbreekt');
  assert.equal(helpers.binaryToDecimal('00000000'), 0);
  assert.equal(helpers.binaryToDecimal('00000101'), 5);
  assert.equal(helpers.binaryToDecimal('11111111'), 255);
  for (let bit = 0; bit < 8; bit++) {
    assert.equal(helpers.binaryToDecimal((2 ** bit).toString(2).padStart(8, '0')), 2 ** bit);
  }
});
test('RGB-waarden worden omgezet naar zes hexadecimale cijfers', () => {
  assert.equal(typeof helpers.rgbToHex, 'function', 'De kleurfunctie ontbreekt');
  assert.equal(helpers.rgbToHex(0, 0, 0), '#000000');
  assert.equal(helpers.rgbToHex(255, 255, 255), '#FFFFFF');
  assert.equal(helpers.rgbToHex(255, 128, 0), '#FF8000');
  assert.equal(helpers.rgbToHex(37, 99, 235), '#2563EB');
});
