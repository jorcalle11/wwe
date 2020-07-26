import React from 'react';
import PropTypes from 'prop-types';

import Champions from '../Champions';
import Championships from '../Championships';
import Shows from '../Shows';
import Superstars from '../Superstars';
import { ENTITIES } from '../../constants';

export default function Content({ selectedNavItem }) {
  if (selectedNavItem === ENTITIES.CHAMPIONSHIPS) {
    return <Championships />;
  }

  if (selectedNavItem === ENTITIES.SHOWS) {
    return <Shows />;
  }

  if (selectedNavItem === ENTITIES.SUPERSTARS) {
    return <Superstars />;
  }

  return <Champions />;
}

Content.propTypes = {
  selectedNavItem: PropTypes.string.isRequired
};
