import Image, { Img } from '.';
import snapshotTests from './testHelpers/snapshotTests';

describe("Image - imported as default 'Image'", () => {
  snapshotTests(Img);
});

describe("Image - Img'", () => {
  snapshotTests(Image);
});
