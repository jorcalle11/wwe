import React from 'react';
import { useQuery } from 'react-query';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Error from '../Error';
import Loading from '../Loading';
import { getFetcherWithAbort } from '../../apis';
import { ENTITIES } from '../../constants';

export default function Shows() {
  const { SHOWS } = ENTITIES;
  const query = useQuery(SHOWS, getFetcherWithAbort(SHOWS));

  if (query.isLoading) return <Loading />;
  if (query.isError) return <Error message={query.error.message} />;

  return (
    <CardGrid size="medium">
      {query.data.map(show => {
        return (
          <Card
            key={show.name}
            title={show.name}
            description={show.schedule}
            imageSource={show.logo_url}
            imageWidth="70%"
            cardHeight="350px"
          />
        );
      })}
    </CardGrid>
  );
}
