import afaan from './pngs/Afaan_Oromoo_48h.png';
import igbo from './pngs/Igbo_48h.png';
import yoruba from './pngs/Yoruba_48h.png';

const images = {
  afaan,
  igbo,
  yoruba,
};

const getImage = name => images[name];

export default getImage;
