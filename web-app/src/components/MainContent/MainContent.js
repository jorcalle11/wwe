import React from 'react';
import styled from 'styled-components';

const superstars = [
  { name: 'Edge' },
  { name: 'Randy Orton' },
  { name: 'Set Rollings' },
];

const filterOptions = ['All', 'Raw', 'Smack Down', 'NXT'];

export default function MainContent() {
  return (
    <Main>
      <Header>
        <SearchBar />
        <FilterBar defaultValue="Raw">
          {filterOptions.map(FilterItem)}
        </FilterBar>
      </Header>
      <CardContainer>{superstars.map(RenderCard)}</CardContainer>
    </Main>
  );
}

const Main = styled.main`
  border: 2px solid tomato;
`;

const Header = styled.header`
  border: 2px solid magenta;
  margin: 5px;
`;

const SearchBar = styled.input`
  border: 1px solid lightSalmon;
  margin: 5px;
`;

const FilterBar = styled.select`
  border: 1px solid brown;
`;

const FilterItem = (item) => {
  return <option key={item}>{item}</option>;
};

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 5px;
  border: 1px solid olive;
  margin: 5px;
`;

const RenderCard = (item) => {
  return <Card key={item.name}>{item.name}</Card>;
};

const Card = styled.article`
  border: 1px solid turquoise;
  height: 200px;
`;
