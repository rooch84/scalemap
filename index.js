'use strict';

/**
 * Converts a value from one scale to another
 * @param {number} value on scale 1
 * @param {number} scale 1 min
 * @param {number} scale 1 max
 * @param {number} scale 2 min
 * @param {number} scale 2 max
 * @return {number} value on scale 2
 */
module.exports =  function(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}	
