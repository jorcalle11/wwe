import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/SideBar';
import MainContent from './components/MainContent/MainContent';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  border: 2px solid black;
`;

const GridItem = styled.div`
  border: 2px solid aqua;
  margin: 5px;
`;

function App() {
  return (
    <GridContainer>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <MainContent />
      </GridItem>
    </GridContainer>
  );
}

export default App;
