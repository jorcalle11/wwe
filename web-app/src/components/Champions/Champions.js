import React from 'react';
import { useQuery } from 'react-query';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Error from '../Error';
import Loading from '../Loading';
import { getFetcherWithAbort } from '../../apis';
import { ENTITIES } from '../../constants';

export default function Champions() {
  const { CHAMPIONS } = ENTITIES;
  const query = useQuery(CHAMPIONS, getFetcherWithAbort(CHAMPIONS));

  if (query.isLoading) return <Loading />;
  if (query.isError) return <Error message={query.error.message} />;

  return (
    <CardGrid>
      {query.data.map(champion => {
        return (
          <Card
            key={champion.name}
            title={champion.name}
            description={champion.championship}
            imageSource={champion.avatar_url}
          />
        );
      })}
    </CardGrid>
  );
}
