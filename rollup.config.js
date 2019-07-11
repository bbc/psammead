import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';

const { LERNA_PACKAGE_NAME } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.js');
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, 'dist');
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const IS_BROWSER_BUNDLE = !!PKG_JSON.browser;

const formats = IS_BROWSER_BUNDLE ? ['umd'] : ['es', 'cjs'];

export default formats.map(format => ({
  plugins: [
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
  ],
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  input: INPUT_FILE,
  name: LERNA_PACKAGE_NAME,
  output: {
    file: path.join(OUTPUT_DIR, `index.${format}.js`),
    format,
  },
  amd: {
    id: LERNA_PACKAGE_NAME,
  },
  sourcemap: true,
}));
