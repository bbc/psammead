import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import Image from '@bbc/psammead-image';
import Bulletin from '.';

/* eslint-disable react/prop-types */
const BulletinComponent = ({
  script,
  service,
  isLive,
  mediaType,
  ctaText,
  lang = null,
}) => {
  const summaryText = 'This is the summary text';
  const headlineText = 'This is the headline';
  const ctaLink = 'https://bbc.co.uk';

  const playCtaText = isLive ? `${ctaText} Live` : ctaText;
  const offScreenText = isLive ? `${ctaText} LIVE` : ctaText;

  const image = (
    <Image
      src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
      alt="Iron man"
    />
  );
  return (
    <Bulletin
      script={script}
      service={service}
      image={image}
      mediaType={mediaType}
      headlineText={headlineText}
      summaryText={summaryText}
      ctaLink={ctaLink}
      ctaText={playCtaText}
      isLive={isLive}
      offScreenText={offScreenText}
      lang={lang}
    />
  );
};

describe('Bulletin', () => {
  shouldMatchSnapshot(
    'should render audio correctly',
    <BulletinComponent
      script={latin}
      service="news"
      mediaType="audio"
      ctaText="Listen"
    />,
  );

  shouldMatchSnapshot(
    'should render audio correctly with lang prop passed in',
    <BulletinComponent
      script={arabic}
      service="arabic"
      mediaType="audio"
      ctaText="Listen"
      lang="en-GB"
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly',
    <BulletinComponent
      script={latin}
      service="news"
      mediaType="video"
      ctaText="Watch"
    />,
  );

  shouldMatchSnapshot(
    'should render live audio correctly',
    <BulletinComponent
      script={latin}
      service="news"
      mediaType="audio"
      ctaText="Listen"
      isLive
    />,
  );

  shouldMatchSnapshot(
    'should render live video correctly',
    <BulletinComponent
      script={latin}
      service="news"
      mediaType="video"
      ctaText="Watch"
      isLive
    />,
  );
});
