import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

const getDirOfPath = filePath =>
  filePath.substring(0, filePath.lastIndexOf('/') + 1);

const writeToNestedFile = (filePath, contents) => {
  const fullFilePath = path.join(__dirname, filePath);
  const folder = getDirOfPath(fullFilePath);

  mkdirp.sync(folder);

  fs.writeFileSync(fullFilePath, contents);

  return fullFilePath;
};

export default writeToNestedFile;
