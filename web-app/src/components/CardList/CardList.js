import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Champions from '../Champions';
import { ENTITIES } from '../../constants';

export default function CardList({ selectedNavItem }) {
  if (selectedNavItem === ENTITIES.CHAMPIONSHIPS) {
    return ENTITIES.CHAMPIONSHIPS;
  }

  if (selectedNavItem === ENTITIES.SHOWS) {
    return ENTITIES.SHOWS;
  }

  if (selectedNavItem === ENTITIES.SUPERSTARTS) {
    return ENTITIES.SUPERSTARTS;
  }

  return (
    <CardContainer>
      <Champions />
    </CardContainer>
  );
}

CardList.propTypes = {
  selectedNavItem: PropTypes.string.isRequired
};

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 15px 20px;
`;
