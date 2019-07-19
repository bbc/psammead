const positiveLookBehind = '(?<=^}$)'; // <-- match `}` where it is at the start and end of a line
const positiveLookAhead = '(?=\n^{$)'; // <-- match where there is a newline then a `{` where it is at the start and end of a line
const endOfAndStartOfPackage = `${positiveLookBehind}${positiveLookAhead}`;

/*
An explanation of what `.split(new RegExp(regex, 'gm'))` does

Given a string:
`
{
  // package A dependencies
}
<--- splits the string with a comma here...
{
  // package B dependencies
}
`

So we end up with an array like this:
[{
  // package A dependencies
},
{
  // package B dependencies
}]

*/

module.exports = packagesString => {
  const getPackageDependencies = ({ name, dependencies }) => ({
    name,
    dependencies: Object.keys(dependencies),
  });
  return packagesString
    .split(new RegExp(endOfAndStartOfPackage, 'gm'))
    .map(JSON.parse)
    .map(getPackageDependencies);
};
