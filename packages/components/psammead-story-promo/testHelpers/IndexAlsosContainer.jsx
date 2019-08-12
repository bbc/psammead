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
  const getMediaType = cpsType => {
    const isPGL = cpsType === 'PGL';
    const isMedia = cpsType === 'MAP';

    if (!isPGL && !isMedia) {
      return null;
    }

    // Update this once the ARES feed contains the media type
    const mediaType = isPGL ? 'photogallery' : 'video';

    return mediaType;
  };

  const IndexAlsosMediaIndicator = cpsType => {
    const indexAlsosMediaType = getMediaType(cpsType);

    return indexAlsosMediaType ? (
      <MediaIndicator service={service} type={indexAlsosMediaType} indexAlsos />
    ) : null;
  };

  return (
    <IndexAlsos offScreenText="Related content">
      {/* eslint-disable-next-line react/prop-types */
      alsoItems.length > 1 ? (
        <IndexAlsosUl>
          {/* eslint-disable-next-line react/prop-types */
          alsoItems.map(item => {
            const { id, cpsType } = item;
            const { headline } = item.headlines;
            const url = item.locators.assetUri;

            return (
              <IndexAlsosLi
                key={id}
                script={script}
                service={service}
                url={url}
                mediaIndicator={IndexAlsosMediaIndicator(cpsType, service)}
                mediaType={getMediaType(cpsType)}
              >
                {headline}
              </IndexAlsosLi>
            );
          })}
        </IndexAlsosUl>
      ) : (
        // When there is exactly one related item, it should not be contained within a list.
        (() => {
          const { cpsType } = alsoItems;
          const { headline } = alsoItems.headlines;
          const url = alsoItems.locators.assetUri;

          return (
            <IndexAlso
              script={script}
              service={service}
              url={url}
              mediaIndicator={IndexAlsosMediaIndicator(cpsType, service)}
              mediaType={getMediaType(cpsType)}
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
