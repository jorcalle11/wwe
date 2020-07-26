import React from 'react';
import PropTypes from 'prop-types';

import Champions from '../Champions';
import Championships from '../Championships';
import { ENTITIES } from '../../constants';

export default function Content({ selectedNavItem }) {
  if (selectedNavItem === ENTITIES.CHAMPIONSHIPS) {
    return <Championships />;
  }

  if (selectedNavItem === ENTITIES.SHOWS) {
    return ENTITIES.SHOWS;
  }

  if (selectedNavItem === ENTITIES.SUPERSTARTS) {
    return ENTITIES.SUPERSTARTS;
  }

  return <Champions />;
}

Content.propTypes = {
  selectedNavItem: PropTypes.string.isRequired
};
