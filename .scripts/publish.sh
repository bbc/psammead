#!/bin/bash
if [[ $(pwd) =~ .+psammead ]]; then
  for package in $(npx lerna ls --parseable)
  do
      local_version=$(node -p -e "require('$package/package.json').version")
      package_name=$(node -p -e "require('$package/package.json').name")
      latest_version=$(npm show $package_name version)

      if [[ $local_version != $latest_version ]]; then
        echo 'Publishing' $package_name
        npm publish $package --access public --dry-run
      fi
  done
fi
