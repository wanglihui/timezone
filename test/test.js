/**
 * Created by wlh on 2016/12/22.
 */
'use strict';

var timezone = require('../index');
var assert = require("assert");

describe('timezone', function() {
  it("#getTimezoneDate with citycode=BJS (北京) should be ok", function() {
    var d = timezone.getTimezoneDate('2016-12-12 12:00:00', 'BJS');
    assert.equal(d.getUTCDate(), 12);
    assert.equal(d.getUTCHours(), 4);
    assert.equal(d.getUTCMinutes(), 0);
  });

  it("#getTimezoneDate with citycode=LHR (伦敦) should be ok", function() {
    var d = timezone.getTimezoneDate('2016-12-12 12:00:00', 'LHR');
    assert.equal(d.getUTCDate(), 12);
    assert.equal(d.getUTCHours(), 12);
    assert.equal(d.getUTCMinutes(), 0);
  });

  it("#getTimezoneDate with citycode=JFK (纽约) should be ok", function() {
    var d = timezone.getTimezoneDate('2016-12-12 12:00:00', 'JFK');
    assert.equal(d.getUTCDate(), 12);
    assert.equal(d.getUTCHours(), 17);
    assert.equal(d.getUTCMinutes(), 0);
  });
})
