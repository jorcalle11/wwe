import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function CardList({ selectedNavItem }) {
  if (selectedNavItem === 'users') {
    return 'users';
  }

  if (selectedNavItem === 'posts') {
    return 'posts';
  }

  return 'todos';
}

CardList.propTypes = {
  selectedNavItem: PropTypes.string.isRequired
};
