import React from 'react';
import { useQuery } from 'react-query';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Loading from '../Loading';
import Error from '../Error';
import { getFetcherWithAbort } from '../../apis';
import { ENTITIES } from '../../constants';

export default function Championships() {
  const { CHAMPIONSHIPS } = ENTITIES;
  const query = useQuery(CHAMPIONSHIPS, getFetcherWithAbort(CHAMPIONSHIPS));

  if (query.isLoading) return <Loading />;
  if (query.isError) return <Error message={query.error.message} />;

  return (
    <CardGrid size="medium">
      {query.data.map(championship => (
        <Card
          key={championship.name}
          title={championship.name}
          description={`${championship.start_year} - ${championship.end_year}`}
          imageSource={championship.logo_url}
          cardHeight="350px"
        />
      ))}
    </CardGrid>
  );
}
