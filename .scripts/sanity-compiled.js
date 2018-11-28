'use strict';

var shell = require('shelljs');

var getChangedPackages = function getChangedPackages() {
	var diff = shell.exec('git diff --raw packages', { silent: true }).stdout;
	var diffArr = diff.split('\n').filter(function (el) {
		return el.length;
	});
	var packageMatch = /.*packages\/(.*)\//;
	return diffArr.map(function (el) {
		return packageMatch.exec(el)[1];
	});
};

console.log(getChangedPackages());
