import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/SideBar';
import MainContent from './components/MainContent/MainContent';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100%;
`;

const GridItem = styled.div`
  // border: 1px solid aqua;
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
