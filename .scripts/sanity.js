const shell = require('shelljs');

const getChangedPackages = () => {
	const diff = shell.exec('git diff --raw packages', {silent:true}).stdout;
	const diffArr = diff.split('\n').filter(el => el.length);
	var packageMatch = /.*packages\/(.*)\//;
	return diffArr.map(el => packageMatch.exec(el)[1]);
}

console.log(getChangedPackages());