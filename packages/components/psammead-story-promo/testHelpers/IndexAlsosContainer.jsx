import React from 'react';
import { oneOfType, arrayOf, shape, number, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import MediaIndicator from '@bbc/psammead-media-indicator';
import {
  IndexAlsos,
  IndexAlso,
  IndexAlsosUl,
  IndexAlsosLi,
} from '../src/IndexAlsos/index';

const IndexAlsosContainer = ({ alsoItems, script, service }) => {
  const getMediaType = (cpsType, mediaType) => {
    const isPGL = cpsType === 'PGL';
    const isMedia = cpsType === 'MAP';
    const media = mediaType || 'Video';

    if (!isPGL && !isMedia) {
      return null;
    }

    const type = isPGL ? 'photogallery' : media.toLowerCase();

    return type;
  };

  const IndexAlsosMediaIndicator = (cpsType, mediaType) => {
    const indexAlsosMediaType = getMediaType(cpsType, mediaType);

    return indexAlsosMediaType ? (
      <MediaIndicator service={service} type={indexAlsosMediaType} indexAlsos />
    ) : null;
  };

  return (
    <IndexAlsos offScreenText="Related content">
      {alsoItems.length > 1 ? (
        <IndexAlsosUl>
          {alsoItems.map(item => {
            const { id, cpsType, mediaType } = item;
            const { headline } = item.headlines;
            const url = item.locators.assetUri;
            const indexAlsoMediaIndicator = IndexAlsosMediaIndicator(
              cpsType,
              mediaType,
              service,
            );
            const indexAlsoMediaType = getMediaType(cpsType, mediaType);

            return (
              <IndexAlsosLi
                key={id}
                script={script}
                service={service}
                url={url}
                mediaIndicator={indexAlsoMediaIndicator}
                mediaType={indexAlsoMediaType}
              >
                {headline}
              </IndexAlsosLi>
            );
          })}
        </IndexAlsosUl>
      ) : (
        // When there is exactly one related item, it should not be contained within a list.
        (() => {
          const { cpsType, mediaType } = alsoItems;
          const { headline } = alsoItems.headlines;
          const url = alsoItems.locators.assetUri;
          const indexAlsoMediaIndicator = IndexAlsosMediaIndicator(
            cpsType,
            mediaType,
            service,
          );
          const indexAlsoMediaType = getMediaType(cpsType, mediaType);

          return (
            <IndexAlso
              script={script}
              service={service}
              url={url}
              mediaIndicator={indexAlsoMediaIndicator}
              mediaType={indexAlsoMediaType}
            >
              {headline}
            </IndexAlso>
          );
        })()
      )}
    </IndexAlsos>
  );
};

const alsoItemsPropTypes = shape({
  headlines: shape({
    headline: string.isRequired,
  }).isRequired,
  locators: shape({
    assetUri: string.isRequired,
    cpsUrn: string,
  }).isRequired,
  summary: string,
  timestamp: number,
  cpsType: string.isRequired,
  id: string.isRequired,
  type: string,
});

IndexAlsosContainer.propTypes = {
  alsoItems: oneOfType([arrayOf(alsoItemsPropTypes), alsoItemsPropTypes])
    .isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export default IndexAlsosContainer;
