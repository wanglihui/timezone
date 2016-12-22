'use strict';

var timezone ={};
var data = require("./timezone");

timezone.getTimezoneDate = function(datestr, citycode) {
  if (!data[citycode]) {
    throw new Error('unSupport city code')
  }
  let offsetUtc = data[citycode][3];
  if (typeof offsetUtc == 'string') {
    offsetUtc = Number(offsetUtc);
  }
  let endFix = ' GMT+0' + (offsetUtc / 60 / 60 * 100);
  return new Date(datestr + endFix);
}

module.exports = timezone;
