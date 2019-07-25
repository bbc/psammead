import afaan from './pngs/Afaan_Oromoo_48h.png';
import igbo from './pngs/Igbo_48h.png';
import punjabi from './pngs/Punjabi_48h.png';
import thai from './pngs/Thai_48h.png';
import yoruba from './pngs/Yoruba_48h.png';

export const images = {
  default: afaan,
  igbo,
  punjabi,
  thai,
  yoruba,
};

const getImage = name =>
  Object.keys(images).includes(name) ? images[name] : images.default;

export default getImage;
