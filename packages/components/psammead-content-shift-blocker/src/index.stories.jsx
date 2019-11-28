/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Paragraph from '@bbc/psammead-paragraph';
import { Headline } from '@bbc/psammead-headings';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import ContentShiftBlocker from './index';

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  display: block;
`;

const getRandomInt = (min = 200, max = 400) =>
  Math.floor(Math.random() * (max - min)) + min;

const ImageTicker = ({ delay }) => {
  const [sizes, setSizes] = useState('400/200');

  useEffect(() => {
    const interval = setInterval(() => {
      setSizes(`${getRandomInt()}/${getRandomInt()}`);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledImage
      src={`https://placekitten.com/${sizes}`}
      alt="Naughty cats >:("
    />
  );
};

const StyledFigure = styled.figure`
  border: solid #ccc 1px;
  padding: 16px;
  text-align: center;
`;
const StyledCaption = styled.figcaption`
  padding-top: 12px;
`;
const Gallery = ({ script, service, delay = 6000 }) => (
  <StyledFigure>
    <ContentShiftBlocker scrollable initialHeight={200} initialWidth={400}>
      <ImageTicker delay={delay} />
    </ContentShiftBlocker>
    <StyledCaption>
      <Paragraph script={script} service={service}>
        A gallery of naughty cats&nbsp;
        <span role="img" aria-label="angry face">
          😠
        </span>
      </Paragraph>
    </StyledCaption>
  </StyledFigure>
);
const paragraphs = [
  'Doggo ipsum sub woofer ruff long woofer, very taste wow. Doggorino very hand that feed shibe smol adorable doggo, floofs. Smol borking doggo with a long snoot for pats thicc blep wow very biscit thicc puggorino wrinkler ruff stop it fren wow very biscit, heckin good boys corgo heckin good boys lotsa pats heckin good boys heckin floofs. Sub woofer aqua doggo bork length boy long water shoob, ruff shibe. Pupperino the neighborhood pupper pats woofer you are doing me the shock big ol pupper porgo mlem, snoot sub woofer clouds floofs pupperino. You are doing me a frighten I am bekom fat long doggo, shooberino. Puggo clouds yapper, the neighborhood pupper. Thicc shibe pupper borking doggo, long water shoob shoober. Blop bork boof heckin angery woofer snoot puggo pats, porgo h*ck ruff heckin good boys and girls big ol pupper. Waggy wags pats bork shooberino heckin good boys and girls I am bekom fat stop it fren, I am bekom fat very jealous pupper maximum borkdrive shoober wow very biscit.',
  'Smol puggorino clouds puggo, waggy wags. Extremely cuuuuuute you are doing me the shock borkdrive yapper, you are doin me a concern. Lotsa pats extremely cuuuuuute pupper ruff very jealous pupper adorable doggo doggo, aqua doggo you are doing me the shock boofers wow such tempt borkf. Tungg lotsa pats heck big ol, wow such tempt. Floofs he made many woofs heckin good boys and girls porgo boof, fat boi big ol pupper. What a nice floof wow very biscit yapper, heckin. Noodle horse bork puggo doggo adorable doggo wrinkler heck, fat boi very jealous pupper shooberino porgo. Extremely cuuuuuute tungg borkdrive big ol pupper shibe waggy wags borkdrive heckin, wrinkler you are doing me a frighten pupper porgo blop length boy. Long doggo thicc long woofer, porgo. Boof long woofer super chub fluffer yapper, extremely cuuuuuute sub woofer. borkdrive yapper long water shoob. I am bekom fat you are doing me the shock ur givin me a spook, extremely cuuuuuute.',
  'Fat boi heckin good boys and girls ruff puggorino big ol pupper thicc, many pats much ruin diet you are doing me a frighten sub woofer vvv, lotsa pats snoot much ruin diet puggo. fat boi shooberino long bois. Noodle horse thicc much ruin diet puggorino lotsa pats, noodle horse yapper very good spot. Doggorino shoob super chub such treat, pupper very good spot. Smol borking doggo with a long snoot for pats clouds pupper borkf maximum borkdrive, puggo snoot floofs. very good spot yapper you are doing me a frighten. Blep smol borking doggo with a long snoot for pats heck borkf, lotsa pats.',
];
const renderParagraphs = ({ script, service }) =>
  paragraphs.map(paragraph => (
    <Paragraph script={script} service={service}>
      {paragraph}
    </Paragraph>
  ));

storiesOf('Components|ContentShiftBlocker', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'vertical content shift',
    ({ script, service }) => {
      return (
        <Wrapper>
          <Headline>The Daily Doggo</Headline>
          {renderParagraphs({ script, service })}
          <Gallery script={script} service={service} />
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
        </Wrapper>
      );
    },
    { notes },
  )
  .add(
    'multiple',
    ({ script, service }) => {
      return (
        <Wrapper>
          <Headline>The Daily Doggo</Headline>
          {renderParagraphs({ script, service })}
          <Gallery script={script} service={service} />
          {renderParagraphs({ script, service })}
          <Gallery script={script} service={service} />
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          <Gallery script={script} service={service} />
          <Gallery script={script} service={service} />
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
        </Wrapper>
      );
    },
    { notes },
  )
  .add(
    'multiple staggered',
    ({ script, service }) => {
      return (
        <Wrapper>
          <Headline>The Daily Doggo</Headline>
          {renderParagraphs({ script, service })}
          <Gallery delay={4000} script={script} service={service} />
          {renderParagraphs({ script, service })}
          <Gallery delay={3000} script={script} service={service} />
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          <Gallery delay={2000} script={script} service={service} />
          <Gallery delay={1000} script={script} service={service} />
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
          {renderParagraphs({ script, service })}
        </Wrapper>
      );
    },
    { notes },
  )
  .add(
    'nothing but cats',
    ({ script, service }) => {
      return (
        <Wrapper>
          <Gallery delay={1000} script={script} service={service} />
          <Gallery delay={4000} script={script} service={service} />
          <Gallery delay={9000} script={script} service={service} />
          <Gallery delay={4000} script={script} service={service} />
          <Gallery delay={7000} script={script} service={service} />
          <Gallery delay={2000} script={script} service={service} />
          <Gallery delay={3000} script={script} service={service} />
          <Gallery delay={2000} script={script} service={service} />
          <Gallery delay={5000} script={script} service={service} />
          <Gallery delay={9000} script={script} service={service} />
          <Gallery delay={8000} script={script} service={service} />
          <Gallery delay={2000} script={script} service={service} />
          <Gallery delay={6000} script={script} service={service} />
          <Gallery delay={8000} script={script} service={service} />
          <Gallery delay={3000} script={script} service={service} />
          <Gallery delay={2000} script={script} service={service} />
        </Wrapper>
      );
    },
    { notes, chromatic: { disable: true } },
  );
