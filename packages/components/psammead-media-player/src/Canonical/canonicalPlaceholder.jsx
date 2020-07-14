import React from 'react';
import styled from 'styled-components';
import ImagePlaceholder from '@bbc/psammead-image-placeholder';

const CanonicalPlaceholder = ({ loading }) => {
  const LoadingImageWrapper = styled.div`
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => (props.loading ? 'red' : 'blue')};;
    /* opacity: ${props => (props.loading ? 1.0 : 0.0)}; */
    transition: background-color 2s ease-out;
  `;

  console.log(`placeholder rendering - loading ${loading}`);

  return (
    <LoadingImageWrapper loading={loading}>
      {/* <ImagePlaceholder ratio={56.25} /> */}
    </LoadingImageWrapper>
  );
};

export default CanonicalPlaceholder;
