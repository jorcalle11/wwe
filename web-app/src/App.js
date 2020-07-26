import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/SideBar';
import Header from './components/Header';
import CardList from './components/CardList';
import { ENTITIES } from './constants';

function App() {
  const [selectedNavItem, setSelectedNavItem] = React.useState(
    ENTITIES.CHAMPIONS
  );

  return (
    <Grid>
      <Header selectedNavItem={selectedNavItem} />
      <Sidebar onSelectNavItem={setSelectedNavItem} />
      <Main>
        <CardList selectedNavItem={selectedNavItem} />
      </Main>
    </Grid>
  );
}

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'sidebar header header'
    'sidebar main main'
    'sidebar main main';
`;

const Main = styled.main`
  grid-area: main;
  overflow-y: auto;
`;

export default App;
