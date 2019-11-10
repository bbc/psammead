import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import OnwardJourneys from '.';

const onwardJourneysData = [
  {
    name: 'Climate change',
    href: 'https://www.bbc.co.uk/news/topics/cmj34zmwm1zt/climate-change',

    url: 'https://www.bbc.co.uk/news/topics/cmj34zmwm1zt/climate-change',
    id: 'cmj34zmwm1zt',
    records: [
      {
        headline: "Climate change 'making mountaineering riskier'",
        url: 'https://www.bbc.co.uk/news/science-environment-50237551',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/14A56/production/_109466548_crevasses.jpg',
          originCode: 'cpsprodpb',
          caption:
            'Crevasses are becoming difficult to cross in some mountainous regions',
          altText: 'Mountaineers climbing the Alps',
          copyrightHolder: 'Getty Images',
          allowSyndication: true,
        },
      },
      {
        headline: "Corbyn plans 'green industrial revolution'",
        url: 'https://www.bbc.co.uk/news/uk-politics-50318521',
        image: {
          height: 576,
          width: 1024,
          href:
            'http://c.files.bbci.co.uk/D615/production/_109550845_p07t5pvs.jpg',
          originCode: 'cpsprodpb',
          altText: 'Jeremy Corbyn',
          copyrightHolder: 'Reuters',
          allowSyndication: true,
        },
      },
      {
        headline: 'How would the Greens fund climate pledge?',
        url: 'https://www.bbc.co.uk/news/uk-politics-50315720',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/AAAE/production/_109549634_gettyimages-976800330.jpg',
          originCode: 'cpsprodpb',
          altText: 'Wind turbines',
          copyrightHolder: 'Getty Images',
          allowSyndication: true,
        },
      },
      {
        headline: "Green Party: 'This must be the climate election'",
        url: 'https://www.bbc.co.uk/news/uk-politics-50317421',
        image: {
          height: 576,
          width: 1024,
          href:
            'http://c.files.bbci.co.uk/036A/production/_109547800_p07t5lh8.jpg',
          originCode: 'cpsprodpb',
          altText: 'Sian Berry, Carla Denyer and Amelia Womack',
          copyrightHolder: 'PA Media',
          allowSyndication: true,
        },
      },
      {
        headline: "Nuclear fusion: 'A question of when, not if'",
        url: 'https://www.bbc.co.uk/news/science-environment-50267017',
        image: {
          height: 261,
          width: 464,
          href:
            'http://c.files.bbci.co.uk/5494/production/_109525612_gettyimages-1095967942.jpg',
          originCode: 'cpsprodpb',
          caption: "An artist's impression of how a fusion reactor might look",
          altText: 'fusion',
          copyrightHolder: 'Getty Images',
          allowSyndication: true,
        },
      },
    ],
  },
  {
    name: 'Environment',
    url: 'https://www.bbc.co.uk/news/topics/cnx753jenyjt/environment',
    id: 'cnx753jenyjt',
    records: [
      {
        headline: 'How Shropshire ideas may help the rewilding debate',
        url: 'https://www.bbc.co.uk/news/uk-england-shropshire-50169027',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/BF0A/production/_109360984_rewilding.jpg',
          originCode: 'cpsprodpb',
          caption:
            "In the Cambrian Mountains there's strong local opposition to rewilding",
          altText:
            "In the Cambrian Mountains there's strong local opposition to rewilding",
          copyrightHolder: 'BBC',
          allowSyndication: true,
        },
      },
      {
        headline: "Farmers' anger over slurry pollution rule changes",
        url: 'https://www.bbc.co.uk/news/uk-wales-50332308',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/3ED6/production/_109568061_gettyimages-1148622395.jpg',
          originCode: 'cpsprodpb',
          altText: 'A cow sticking its tongue out',
          copyrightHolder: 'Getty Images',
          allowSyndication: true,
        },
      },
      {
        headline: 'This must be the climate election - Greens',
        url: 'https://www.bbc.co.uk/news/uk-politics-50305284',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/15DF0/production/_109548598_mediaitem109548595.jpg',
          originCode: 'cpsprodpb',
          caption:
            'Co-leader Sian Berry, candidate Carla Denyer and deputy leader Amelia Womack',
          altText:
            'Sian Berry, Bristol West Candidate Carla Denyer and deputy leader Amelia Womack',
          copyrightHolder: 'PA Media',
          allowSyndication: true,
        },
      },
      {
        headline: "Plans to double city's green space",
        url: 'https://www.bbc.co.uk/news/uk-wales-50303472',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/6468/production/_109540752_rivertawegreencorridor.png',
          originCode: 'cpsprodpb',
          altText: 'River Tawe Wildlife Corridor',
          copyrightHolder: 'Swansea Council',
          allowSyndication: false,
        },
      },
      {
        headline: "Do your 'plastic-free' teabags contain plastic?",
        url: 'https://www.bbc.co.uk/news/uk-50260687',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/7ED8/production/_109427423_gettyimages-93195303.jpg',
          originCode: 'cpsprodpb',
          altText: 'Tea bag in cup',
          copyrightHolder: 'Getty Images',
          allowSyndication: true,
        },
      },
      {
        headline: 'How much will this be a climate change election?',
        url: 'https://www.bbc.co.uk/news/science-environment-50307304',
        image: {
          height: 549,
          width: 976,
          href:
            'http://c.files.bbci.co.uk/96D6/production/_109541683_mediaitem109541681.jpg',
          originCode: 'cpsprodpb',
          altText: 'Solar panels',
          copyrightHolder: 'PA Media',
          allowSyndication: true,
        },
      },
    ],
  },
];

describe('OnwardJourneys', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <OnwardJourneys
      onwardJourneysData={onwardJourneysData}
      service="news"
      script={latin}
    />,
  );

  it('should render component heading', () => {
    const { container } = render(
      <OnwardJourneys
        onwardJourneysData={onwardJourneysData}
        service="news"
        script={latin}
      />,
    );
    expect(container.querySelector('h2').textContent).toEqual(
      'More from the BBC',
    );
  });
});
