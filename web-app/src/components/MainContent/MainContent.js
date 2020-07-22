import React from 'react';
import styled from 'styled-components';

const filterOptions = ['All', 'Raw', 'Smack Down', 'NXT'];

export default function MainContent({ entities = {}, currentEntity = '' }) {
  function CardWrapper() {
    if (currentEntity === 'users') {
      return <Users users={entities.users} />;
    }

    if (currentEntity === 'posts') {
      return <Posts posts={entities.posts} />;
    }

    return <Todos todos={entities.todos} />;
  }

  return (
    <Main>
      <Header>
        <Title>{currentEntity}</Title>
        <SearchBar placeholder="search superstart" />
        <FilterBar defaultValue="Raw">
          {filterOptions.map(FilterItem)}
        </FilterBar>
      </Header>
      <Wrapper>
        <CardWrapper />
      </Wrapper>
    </Main>
  );
}

function Todos({ todos = [] }) {
  return (
    <CardContainer>
      {todos.map(todo => {
        return <Card key={todo.title}>{todo.title}</Card>;
      })}
    </CardContainer>
  );
}

function Users({ users = [] }) {
  return (
    <CardContainer>
      {users.map(user => {
        return <Card key={user.name}>{user.name}</Card>;
      })}
    </CardContainer>
  );
}

function Posts({ posts = [] }) {
  return (
    <CardContainer>
      {posts.map(post => {
        return <Card key={post.title}>{post.title}</Card>;
      })}
    </CardContainer>
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
