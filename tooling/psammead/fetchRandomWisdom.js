const wisdomList = [
  'Common sense is genius dressed in its working clothes\nRalph Waldo Emerson',
  'Deal with the faults of others as gently as your own\nChinese Proverb',
  'Justice is truth in action\nBenjamin Disraeli',
  'A new broom sweeps clean but an old broom knows the corners\nVirgin Islander (on friendship)',
  "Give a man a fish and you feed him for a day; teach a man to fish and he'll eat forever\nChinese Proverb",
  'He who has a why to live can bear almost any how\nFriedrich Nietzsche',
  'Silence is often misinterpreted but never misquoted\nunknown',
  'Lost time is never found again\nBenjamin Franklin',
  'The wise understand by themselves; fools follow the reports of others\nTibetan (on wisdom)',
  'One should speak little with others and much with oneself\nDanish (on the conduct of life)',
  'When you say one thing, the clever person understands three\nChinese (on wisdom)',
  'The riches that are in the heart cannot be stolen\nRussian Proverb',
  'The only thing we can know is that we know nothing and that is the highest flight of human wisdom\nLeo Tolstoy',
  'The young man knows the rules, but the old man knows the exceptions\nOliver Wendell Holmes',
  'Plan your life like you will live forever, and live your life like you will die the next day\nunknown',
  'Proverbs are short sentences drawn from long experience\nCervantes',
  'Desires are brought to live depending on one’s wisdom. Wisdom gives direction to desires\nTakuan Soho',
  'Wisdom is ofttimes nearer when we stoop than when we soar\nWilliam Wordsworth',
  "A proverb is one man's wit and all men's wisdom\nLord John Russell",
  'A blind person who sees is better than a seeing person who is blind\nIranian (on wisdom)',
  'A proverb is a short sentence based on long experience\nAmerican (on proverbs)',
  'Economy is the wealth of the poor and the wisdom of the rich\nFrench (on thrift)',
  "Even a fish wouldn't get into trouble if it kept its mouth shut\nKorean (on common sense)",
  'He that respects himself is safe from others\nHenry Wadsworth Longfellow',
  'He who flees at the right time can fight again\nMarcus Trentius Varro',
  "A crown's no cure for a headache\nEnglish (on basic truths)",
  'Life is a journey, not a destination\nRalph Waldo Emerson',
];

const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

module.exports = () => {
  const randomInt = getRandomInteger(0, wisdomList.length);

  return wisdomList[randomInt];
};
