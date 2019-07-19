const positiveLookBehind = '(?<=^}$)'; // <-- match `}` where it is at the start and end of a line
const positiveLookAhead = '(?=\n^{$)'; // <-- match where there is a newline then a `{` where it is at the start and end of a line
const regex = `${positiveLookBehind}${positiveLookAhead}`;

/*
An explanation of what `.split(new RegExp(regex, 'gm'))` does

```
{
  // package A dependencies
}
<--- splits the string with a comma here...
{
  // package B dependencies
}
```

so we end up with an array like this
```
[{
  // package A dependencies
},
{
  // package B dependencies
}]
```
*/

module.exports = output => {
  const getPackageDependencies = ({ name, dependencies }) => ({
    name,
    dependencies: Object.keys(dependencies),
  });
  return output
    .split(new RegExp(regex, 'gm'))
    .map(JSON.parse)
    .map(getPackageDependencies);
};
