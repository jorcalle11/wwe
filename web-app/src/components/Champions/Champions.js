import React from 'react';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Error from '../Error';
import Loading from '../Loading';
import Api from '../../apis';
import { ENTITIES } from '../../constants';

export default function Champions() {
  const [champions, setChampions] = React.useState([]);
  const [status, setStatus] = React.useState('started');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    Api.fetchDataByEntity(ENTITIES.CHAMPIONS, {
      signal: abortController.signal
    })
      .then(champions => {
        setStatus('resolved');
        setChampions(champions);
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
      {champions.map(champion => {
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
