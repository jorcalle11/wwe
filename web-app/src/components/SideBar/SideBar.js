import React from 'react';
import styled from 'styled-components';

import { ENTITIES } from '../../constants';

export default function SideBar({ onSelectNavItem }) {
  const selectItem = event => {
    const entity = event.target.textContent.toLowerCase();
    onSelectNavItem(entity);
  };

  return (
    <Aside>
      <Header>
        <Title>
          <A href="#">WWE</A>
        </Title>
        <SubTitle>World Westring Entertainment</SubTitle>
      </Header>
      <Navigation>
        <Ul>
          {Object.values(ENTITIES).map(entity => (
            <NavigationItem key={entity} onClick={selectItem}>
              {entity}
            </NavigationItem>
          ))}
        </Ul>
      </Navigation>
    </Aside>
  );
}

const paddingLeft = '15px';

const Aside = styled.aside`
  grid-area: sidebar;
  background-color: var(--secondaryColor);
`;

const Header = styled.header`
  padding-top: 10px;
  padding-left: ${paddingLeft};
`;

const Title = styled.h1`
  font-family: 'Sriracha', cursive;
  margin: 0px;
  padding: 0px;
`;

const SubTitle = styled.span`
  color: var(--secondaryText);
  font-size: 12px;
  margin: 0px;
  padding: 0px;
`;

const Navigation = styled.nav`
  margin-top: 25px;
  padding-left: ${paddingLeft};
`;

const Ul = styled.ul`
  padding: 0;
`;

const NavigationItem = styled.li`
  text-transform: capitalize;
  list-style-type: none;
  padding: 5px 0px;
  color: var(--secondaryText);
  cursor: pointer;

  &&:hover {
    color: var(--primaryText);
  }
`;

const A = styled.a`
  text-decoration: none;
  display: block;
  color: var(--primaryText);
`;
