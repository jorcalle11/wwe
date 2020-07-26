import React from 'react';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Error from '../Error';
import Loading from '../Loading';
import Api from '../../apis';
import { ENTITIES } from '../../constants';

export default function Shows() {
  const [shows, setShows] = React.useState([]);
  const [status, setStatus] = React.useState('started');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    Api.fetchDataByEntity(ENTITIES.SHOWS, {
      signal: abortController.signal
    })
      .then(shows => {
        setStatus('resolved');
        setShows(shows);
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
    return <Loading />;
  }

  if (status === 'rejected') {
    return <Error message={error} />;
  }

  return (
    <CardGrid size="medium">
      {shows.map(show => {
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
