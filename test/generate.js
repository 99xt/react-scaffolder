'use strict';

var assert = require('chai').assert;
var generateApp = require('../lib/generate');

var generate = new generateApp();

describe('Create react components', function () {
	it('should create a parent react component', function (done) {
		var answers = {
			"componentType": "child",
			"propTypes": "yes",
			"propNo": "2",
			"propName": "first",
			"propType": "number"
		};
		var answersInner = {
			first: 'string',
			last: 'string'
		};
		generate.createComponent('core', 'sample', answers, answersInner, function (status) {
			assert.equal(status, 'module doesn\'t exist');
			done();
		});
	});
});