import React from 'react';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Loading from '../Loading';
import Error from '../Error';
import Api from '../../apis';
import { ENTITIES } from '../../constants';

export default function Championships() {
  const [status, setStatus] = React.useState('started');
  const [championships, setChampionships] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    Api.fetchDataByEntity(ENTITIES.CHAMPIONSHIPS, {
      signal: abortController.signal
    })
      .then(championships => {
        setStatus('resolved');
        setChampionships(championships);
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
    <CardGrid>
      {championships.map(championship => (
        <Card
          key={championship.name}
          title={championship.name}
          description={`${championship.start_year} - ${championship.end_year}`}
          imageSource={championship.logo_url}
          style={{ height: '220px' }}
        />
      ))}
    </CardGrid>
  );
}
