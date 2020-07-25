import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/SideBar';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  const [selectedNavItem, setSelectedNavItem] = React.useState('todos');

  return (
    <Grid>
      <Sidebar onSelectNavItem={setSelectedNavItem} />
      <Main>
        <Header selectedNavItem={selectedNavItem} />
        <CardList selectedNavItem={selectedNavItem} />
      </Main>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100%;
`;

const Main = styled.main`
  height: 100%;
`;

export default App;
