import React from 'react';
import styled from 'styled-components';

const superstars = new Array(4).fill({ name: 'Randy Orton' });

const filterOptions = ['All', 'Raw', 'Smack Down', 'NXT'];

export default function MainContent() {
  return (
    <Main>
      <Header>
        <Title>Superstarts</Title>
        <SearchBar placeholder="search superstart" />
        <FilterBar defaultValue="Raw">
          {filterOptions.map(FilterItem)}
        </FilterBar>
      </Header>
      <Wrapper>
        <CardContainer>{superstars.map(RenderCard)}</CardContainer>
      </Wrapper>
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
`;

const Header = styled.header`
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

const FilterItem = item => {
  return <option key={item}>{item}</option>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 90px);
  overflow: auto;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 15px 20px;
`;

const RenderCard = item => {
  return <Card key={item.name}>{item.name}</Card>;
};

const Card = styled.article`
  border: 1px solid turquoise;
  height: 200px;
`;
