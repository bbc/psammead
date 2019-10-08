/* eslint-disable no-use-before-define */
const { xml2json } = require('xml-js');
const path = require('ramda/src/path');
const pathOr = require('ramda/src/pathOr');
const is = require('ramda/src/is');
const { fragment, urlLink } = require('./models');

const attributeTags = ['bold', 'italic'];
const supportedXmlNodeNames = ['paragraph', 'link', 'url', ...attributeTags];

const isXmlNodeSupported = node => {
  if (path(['type'], node) === 'text') {
    return Boolean(pathOr('', ['text'], node).trim());
  }

  return supportedXmlNodeNames.includes(path(['name'], node));
};

const getTextFromChildBlocks = childBlocks => {
  if (!is(Array, childBlocks)) return '';

  return childBlocks.map(({ model }) => pathOr('', ['text'], model)).join('');
};

const findEl = (element, name, key) => {
  const elements = path(['elements'], element);

  if (!is(Array, elements)) return undefined;

  return elements.find(el => path([key], el) === name);
};

const findAtr = (element, name) => path(['attributes', name], element);

const createUrlLink = element => {
  const captionTextNode = findEl(element, 'caption', 'name');

  const locator = findAtr(findEl(element, 'url', 'name'), 'href');

  const text = path(['text'], findEl(captionTextNode, 'text', 'type'));

  const blocks = [fragment(text)];

  return urlLink(text, locator, blocks);
};

const convertToBlocks = (node, attributes = []) =>
  pathOr([], ['elements'], node).reduce((acc, childNode) => {
    if (isXmlNodeSupported(childNode)) {
      const block = xmlNodeToBlock(childNode, attributes);
      const blocks = is(Array, block) ? block : [block];
      return [...acc, ...blocks];
    }
    return acc;
  }, []);

const xmlNodeToBlock = (node, attributes) => {
  if (!is(Object, node)) return undefined;

  if (node.type === 'text') {
    return fragment(node.text, attributes);
  }

  if (node.name === 'link') {
    return createUrlLink(node);
  }

  if (attributeTags.includes(node.name)) {
    if (!is(Array, attributes)) return undefined;

    const styleAttribute = node.name;
    return convertToBlocks(node, [...attributes, styleAttribute]);
  }

  const childBlocks = convertToBlocks(node);

  return {
    type: node.name,
    model: {
      text: getTextFromChildBlocks(childBlocks),
      blocks: childBlocks,
    },
  };
};

const candyXmlToRichText = xml => {
  try {
    const parsedXml = JSON.parse(xml2json(xml));

    const bodyXmlNode = path(['elements', 0], parsedXml);

    const blocks = convertToBlocks(bodyXmlNode);

    return {
      type: 'text',
      model: {
        blocks,
      },
    };
  } catch (e) {
    return null;
  }
};

module.exports = candyXmlToRichText;
