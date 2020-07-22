import React from 'react';
import styled from 'styled-components';

import Api from '../../apis';

export default function SideBar({ dispatch, setCurrentTab }) {
  const selectTab = event => {
    event.preventDefault();
    const entity = event.target.text;
    setCurrentTab(entity.toLowerCase());

    Api.fetchDataByEntity(entity)
      .then(data => dispatch({ type: entity.toUpperCase(), data }))
      .catch(error => console.error(error));
  };

  React.useEffect(() => {
    console.log('runnning effect!');
    Api.fetchDataByEntity().then(data => dispatch({ type: 'TODOS', data }));
  }, []);

  return (
    <Aside>
      <Header>
        <Title>
          <A href="#" style={{ color: 'var(--primaryText)' }}>
            WWE
          </A>
        </Title>
        <SubTitle>World Westring Entertainment</SubTitle>
      </Header>
      <Navigation>
        <Ul>
          <NavigationItem>
            <A href="#" onClick={selectTab}>
              Todos
            </A>
          </NavigationItem>
          <NavigationItem>
            <A href="#" onClick={selectTab}>
              Users
            </A>
          </NavigationItem>
          <NavigationItem>
            <A href="#" onClick={selectTab}>
              Posts
            </A>
          </NavigationItem>
        </Ul>
      </Navigation>
    </Aside>
  );
}

const paddingLeft = '15px';

const Aside = styled.aside`
  background-color: var(--secondaryColor);
  height: 100%;
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
  list-style-type: none;
  padding: 5px 0px;
`;

const A = styled.a`
  color: var(--secondaryText);
  text-decoration: none;
  display: block;

  &&:hover {
    color: var(--primaryText);
  }
`;
