import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { dirDecorator, inputProvider } from '@bbc/psammead-storybook-helpers';
import { oneOf, string } from 'prop-types';
import { ConsentBanner, ConsentBannerText } from '.';
import notes from '../README.md';

const Accept = acceptText => (
  <button onClick={() => {}} type="button">
    {acceptText}
  </button>
);

const Reject = rejectText => (
  <a href="https://www.bbc.co.uk/usingthebbc/your-data-matters">{rejectText}</a>
);

const Text = ({ dir, script, service, shortText, text }) => (
  <ConsentBannerText dir={dir} script={script} service={service}>
    {`${text} `}
    <a href="https://www.bbc.com/news">{shortText}</a>
  </ConsentBannerText>
);

Text.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
  script: string.isRequired,
  service: string.isRequired,
  shortText: string.isRequired,
  text: string.isRequired,
};

Text.defaultProps = {
  dir: 'ltr',
};

storiesOf('Components|ConsentBanner', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'default',
    inputProvider({
      slots: [
        {
          name: 'title',
          defaultText: 'Privacy and Cookies Policy',
        },
        {
          name: 'text',
          defaultText: 'Changes to our Privacy and Cookie Policy ',
        },
      ],
      /* eslint-disable react/prop-types */
      componentFunction: ({
        slotTexts: [title, text],
        dir,
        script,
        service,
      }) => {
        const shortText = text.trim().split(' ')[0];
        return (
          <ConsentBanner
            dir={dir}
            title={title}
            text={Text({ dir, script, service, text, shortText })}
            accept={Accept(shortText)}
            reject={Reject(shortText)}
            script={script}
            service={service}
          />
        );
      },
    }),
    { notes, knobs: { escapeHTML: false } },
    { chromatic: { disable: true } },
  );

storiesOf('Components|ConsentBanner', module)
  .addDecorator(dirDecorator)
  .add(
    'rtl',
    inputProvider({
      slots: [
        {
          name: 'title',
          defaultText:
            'المحكمة العليا الأمريكية ذات الأغلبية المحافظة وافقت على احتجاز غير المواطنين لأجل غير مسمى حتى بعد سنوات من خروجهم من السجن',
        },
        {
          name: 'text',
          defaultText: 'Changes to our Privacy and Cookie Policy ',
        },
      ],
      /* eslint-disable react/prop-types */
      componentFunction: ({
        slotTexts: [title, text],
        dir = 'rtl',
        script = 'arabic',
        service = 'persian',
      }) => {
        const shortText = text.trim().split(' ')[0];
        return (
          <ConsentBanner
            dir="rtl"
            title={title}
            text={Text({ dir, script, service, text, shortText })}
            accept={Accept(shortText)}
            reject={Reject(shortText)}
            script={script}
            service={service}
          />
        );
      },
    }),
  );

storiesOf('Components|ConsentBanner', module)
  .addDecorator(dirDecorator)
  .add(
    'ltr',
    inputProvider({
      slots: [
        {
          name: 'title',
          defaultText: 'Privacy and Cookies Policy',
        },
        {
          name: 'text',
          defaultText: 'Changes to our Privacy and Cookie Policy ',
        },
      ],
      /* eslint-disable react/prop-types */
      componentFunction: ({
        slotTexts: [title, text],
        dir = 'ltr',
        script = 'latin',
        service = 'news',
      }) => {
        const shortText = text.trim().split(' ')[0];
        return (
          <ConsentBanner
            dir="rtl"
            title={title}
            text={Text({ dir, script, service, text, shortText })}
            accept={Accept(shortText)}
            reject={Reject(shortText)}
            script={script}
            service={service}
          />
        );
      },
    }),
  );
