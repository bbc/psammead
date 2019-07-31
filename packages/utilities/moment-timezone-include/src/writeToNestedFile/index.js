import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

const writeToNestedFile = (filePath, contents) => {
  const fullFilePath = path.join(__dirname, filePath);
  const folder = path.dirname(fullFilePath);

  mkdirp.sync(folder);

  fs.writeFileSync(fullFilePath, contents);

  return fullFilePath;
};

export default writeToNestedFile;
