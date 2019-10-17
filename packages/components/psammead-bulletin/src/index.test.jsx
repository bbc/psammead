import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { Link, LiveLabel } from '@bbc/psammead-story-promo';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Image from '@bbc/psammead-image';
import {
  Bulletin,
  BulletinHeading,
  BulletinSummary,
  BulletinCTA,
} from './index';

/* eslint-disable react/prop-types */
const BulletinComponent = ({ script, service, isLive, dir, type, ctaText }) => {
  const summaryText = 'This is the summary text';
  const headlineText = 'This is the headline';
  const imgSrc =
    'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg';
  const bulletinLink = 'https://bbc.co.uk';
  const imgAltText = 'Iron man';

  return (
    <Bulletin>
      {type === 'video' && <Image src={imgSrc} alt={imgAltText} />}
      <BulletinHeading script={script} service={service}>
        <VisuallyHiddenText>{ctaText}, </VisuallyHiddenText>
        {isLive && (
          <LiveLabel service={service} dir={dir}>
            Live
          </LiveLabel>
        )}
        <Link href={bulletinLink}>{headlineText}</Link>
      </BulletinHeading>
      <BulletinSummary script={script} service={service}>
        {summaryText}
      </BulletinSummary>
      <BulletinCTA
        type={type}
        isLive={isLive}
        dir={dir}
        service={service}
        script={script}
      >
        {ctaText}
      </BulletinCTA>
    </Bulletin>
  );
};

describe('Bulletin', () => {
  shouldMatchSnapshot(
    'should render audio correctly',
    <BulletinComponent
      script={latin}
      service="news"
      dir="ltr"
      ctaText="Listen"
      type="audio"
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly',
    <BulletinComponent
      script={latin}
      service="news"
      dir="ltr"
      ctaText="Watch"
      type="video"
    />,
  );

  shouldMatchSnapshot(
    'should render live audio correctly',
    <BulletinComponent
      script={latin}
      service="news"
      dir="ltr"
      ctaText="Listen"
      type="audio"
      isLive
    />,
  );

  shouldMatchSnapshot(
    'should render live video correctly',
    <BulletinComponent
      script={latin}
      service="news"
      dir="ltr"
      ctaText="Watch"
      type="video"
      isLive
    />,
  );
});
