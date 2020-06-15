import React from 'react';
import styled from 'styled-components';

export default function SideBar() {
  return (
    <Aside>
      <Title>WWE</Title>
      <Navigation>
        <Ul>
          <NavigationItem>Superstarts</NavigationItem>
          <NavigationItem>Shows</NavigationItem>
          <NavigationItem>Championships</NavigationItem>
        </Ul>
      </Navigation>
    </Aside>
  );
}

const Aside = styled.aside`
  border: 2px solid red;
`;

const Title = styled.h1`
  border: 2px solid violet;
  margin: 5px;
`;

const Navigation = styled.nav`
  border: 2px solid blue;
  margin: 5px;
`;

const Ul = styled.ul`
  padding: 0;
`;

const NavigationItem = styled.li`
  border: 2px solid pink;
  margin: 5px;
  list-style-type: none;
`;
