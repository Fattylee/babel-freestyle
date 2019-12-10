const debug = require('debug')('active');

const util = {
  sum(a, b) {
    return a + b;
  },
};
export const mut = (num) => num * 5;

debug(2, 4, 6, 8, 9);

const longestName = 'ahhssineshsbzgevsgbzhs';

const appendLongestName = `${longestName}!!!`;
const getLongestName = function ok(name) {
  return name + appendLongestName;
};
getLongestName(23);
export default util;
