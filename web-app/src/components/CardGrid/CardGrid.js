import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CardGrid({ children, size = 'small' }) {
  const sizeInPixels = getSizeInPixels(size);
  return <Section height={sizeInPixels}>{children}</Section>;
}

function getSizeInPixels(size) {
  if (size === 'large') {
    return '500px';
  }

  if (size === 'medium') {
    return '350px';
  }

  return '250px';
}

CardGrid.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

const Section = styled.section`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fill, minmax(${props.height}, 1fr))`};
  grid-gap: 1rem;
  padding: 15px 20px;
`;
