const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const mainStr = String(str);
  const additionStr = options.addition !== undefined ? String(options.addition) : '';

  const additionRepeats = options.additionRepeatTimes || 1;
  const additionSep = options.additionSeparator || '|';
  const repeatedAddition = Array(additionRepeats).fill(additionStr).join(additionSep);

  const fullString = mainStr + repeatedAddition;
  const mainRepeats = options.repeatTimes || 1;
  const mainSep = options.separator || '+';

  return Array(mainRepeats).fill(fullString).join(mainSep);
}

module.exports = {
  repeater
};
