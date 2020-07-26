import React from 'react';
import { useQuery } from 'react-query';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Loading from '../Loading';
import Error from '../Error';
import { getFetcherWithAbort } from '../../apis';
import { ENTITIES } from '../../constants';

export default function Superstars() {
  const { SUPERSTARS } = ENTITIES;
  const query = useQuery(SUPERSTARS, getFetcherWithAbort(SUPERSTARS));

  if (query.isLoading) return <Loading />;
  if (query.isError) return <Error message={query.error.message} />;

  return (
    <CardGrid>
      {query.data.map(superstar => (
        <Card
          key={superstar.name}
          title={superstar.name}
          imageSource={superstar.avatar_url}
        />
      ))}
    </CardGrid>
  );
}
