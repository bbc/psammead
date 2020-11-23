import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as scripts from '@bbc/gel-foundations/scripts';

import PodcastPromo from '.';
import CardCallToAction from './components/card-call-to-action';

describe('Podcast Promo', () => {
  describe('Title', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Title script={scripts.latin} service="russian">
        Content
      </PodcastPromo.Title>,
    );
  });

  describe('Card', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Card>Content</PodcastPromo.Card>,
    );
  });

  describe('Card Content', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Card.Content>Content</PodcastPromo.Card.Content>,
    );
  });

  describe('Card Title', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Card.Title script={scripts.latin} service="russian">
        Content
      </PodcastPromo.Card.Title>,
    );
  });

  describe('Card Description', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Card.Description script={scripts.latin} service="russian">
        Content
      </PodcastPromo.Card.Description>,
    );
  });

  describe('Card Image', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Card.Image>Content</PodcastPromo.Card.Image>,
    );
  });

  describe('Card Link', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <PodcastPromo.Card.Link href="https://www.bbc.com">
        Content
      </PodcastPromo.Card.Link>,
    );
  });

  describe('card-call-to-action', () => {
    shouldMatchSnapshot(
      'should match snapshot',
      <CardCallToAction script={scripts.latin} service="russian">
        Click Me
      </CardCallToAction>,
    );
    it('should be aria-hidden', () => {
      const { container } = render(
        <CardCallToAction script={scripts.latin} service="russian">
          Click Me
        </CardCallToAction>,
      );

      expect(container.querySelector('span')).toHaveAttribute(
        'aria-hidden',
        'true',
      );
    });
  });
});
