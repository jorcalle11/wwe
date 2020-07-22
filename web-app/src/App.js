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
  const [currentTab, setCurrentTab] = React.useState('todos');
  const [entities, dispatch] = React.useReducer(reducer, {
    todos: [],
    users: [],
    posts: []
  });

  return (
    <GridContainer>
      <GridItem>
        <Sidebar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          dispatch={dispatch}
        />
      </GridItem>
      <GridItem>
        <MainContent currentEntity={currentTab} entities={entities} />
      </GridItem>
    </GridContainer>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'TODOS': {
      return { ...state, todos: action.data };
    }
    case 'USERS': {
      return { ...state, users: action.data };
    }
    case 'POSTS': {
      return { ...state, posts: action.data };
    }
    default:
      return state;
  }
}

export default App;
