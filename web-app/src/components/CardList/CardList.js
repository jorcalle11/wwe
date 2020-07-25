import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Api from '../../apis';

export default function CardList({ selectedNavItem }) {
  if (selectedNavItem === 'users') {
    return 'users';
  }

  if (selectedNavItem === 'posts') {
    return 'posts';
  }

  return <Todos />;
}

CardList.propTypes = {
  selectedNavItem: PropTypes.string.isRequired
};

function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState('started');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    Api.fetchDataByEntity('todos', { signal: abortController.signal })
      .then(todos => {
        setStatus('resolved');
        setTodos(todos);
      })
      .catch(error => {
        setStatus('rejected');
        setError(error.message);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  if (status === 'started') {
    return <CardContainer>Loading...</CardContainer>;
  }

  if (status === 'rejected') {
    return <CardContainer>{error}</CardContainer>;
  }

  return (
    <CardContainer>
      {todos.map(todo => {
        return <Card key={todo.title}>{todo.title}</Card>;
      })}
    </CardContainer>
  );
}

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 15px 20px;
`;

const Card = styled.article`
  border: 1px solid turquoise;
  height: 200px;
`;
