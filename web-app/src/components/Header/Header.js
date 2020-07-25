import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const filterOptions = ['All', 'Raw', 'Smack Down', 'NXT'];

export default function Header({ selectedNavItem }) {
  return (
    <HeaderWrapper>
      <Title>{selectedNavItem}</Title>
      <SearchBar placeholder="search superstart" />
      <FilterBar defaultValue={filterOptions[1]}>
        {filterOptions.map(item => (
          <option key={item}>{item}</option>
        ))}
      </FilterBar>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  selectedNavItem: PropTypes.string.isRequired
};

const HeaderWrapper = styled.header`
  grid-area: header;
  padding: 30px 20px;
  display: flex;
`;

const Title = styled.h2`
  margin: 0px;
  margin-right: 20px;
`;

const SearchBar = styled.input`
  margin-right: 20px;
`;

const FilterBar = styled.select`
  // border: 1px solid brown;
`;
