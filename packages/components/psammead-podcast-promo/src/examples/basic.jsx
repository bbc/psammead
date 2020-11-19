import React from 'react';
import PodcastPromo from '..';

const BasicExample = () => {
  return (
    <PodcastPromo role="region">
      <PodcastPromo.Title>Подкаст</PodcastPromo.Title>
      <PodcastPromo.Card>
        <PodcastPromo.Card.Image
          src="http://ichef.bbci.co.uk/images/ic/3000x3000/p0776f5z.jpg"
          alt="Что это было?"
        />
        <PodcastPromo.Card.Content>
          <PodcastPromo.Card.Title>
            <PodcastPromo.Card.Link href="https://www.bbc.com/russian/media-47937790">
              Что это было?
            </PodcastPromo.Card.Link>
          </PodcastPromo.Card.Title>
          <PodcastPromo.Card.Description>
            Мы быстро, просто и понятно объясняем, что случилось, почему это
            важно и что будет дальше. Никаких ненужных подробностей и
            передергиваний - только факты и взвешенная аналитика.
          </PodcastPromo.Card.Description>
          <PodcastPromo.Card.CallToAction>
            эпизоды
          </PodcastPromo.Card.CallToAction>
        </PodcastPromo.Card.Content>
      </PodcastPromo.Card>
    </PodcastPromo>
  );
};

export default BasicExample;
