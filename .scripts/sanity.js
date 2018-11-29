const shell = require('shelljs');
const semver = require('semver');
const chalk = require('chalk');
const fs = require('fs');
let good = true;

const uniq = arr => Array.from(new Set(arr));

const getChangedPackages = () => {
	const diff = shell.exec('git diff --raw origin/latest -- packages', {silent:true}).stdout;
	const diffArr = diff.split('\n').filter(el => el.length);
	var packageMatch = /.*packages\/(.*)\//;
	return uniq(diffArr.map(el => packageMatch.exec(el)[1]));
}

const fileExists = (packageName, file) => {
	if (!fs.existsSync(`packages/${packageName}/${file}`)) {
		console.log(chalk.red(`OH NO! Package ${packageName} doesnt have a ${file}!`));
		good = false;
		return false;
	}

	return true;
};

const checkVersionBump = (packageName) =>  {
	const diff = shell.exec(`git diff origin/latest -- packages/${packageName}/package.json`, {silent:true}).stdout;
	const versionMatch = /"version": "(\d*.\d*.\d*)/g;
	const versions = [];

	diff.replace(versionMatch, (match, g1) => versions.push(g1));

	if(versions.length !== 2 || !semver.lt(...versions)){
		console.log(chalk.red(`OH NO! Package ${packageName} doesnt have a version bump!`));
		good = false;
	}
}

const checkFileChange = (packageName, file) => {
	const diff = shell.exec(`git diff origin/latest -- packages/${packageName}/${file}`, {silent:true}).stdout;
	
	if(!diff){
		console.log(chalk.red(`OH NO! Package ${packageName} doesnt have an updated ${file}!`));
		good = false;
	}
};

const changedPackages = getChangedPackages();

changedPackages.forEach(packageName => {
	if(fileExists(packageName, 'package.json')){
		checkVersionBump(packageName);
	}

	if(fileExists(packageName, 'CHANGELOG.md')){
		checkFileChange(packageName, 'CHANGELOG.md');
	}

	fileExists(packageName, 'package-lock.json');
	fileExists(packageName, 'README.md');
});

if (!good) {
	process.exit(1);
}