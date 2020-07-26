import React from 'react';

import CardGrid from '../CardGrid';
import Card from '../Card';
import Loading from '../Loading';
import Error from '../Error';
import Api from '../../apis';
import { ENTITIES } from '../../constants';

export default function Superstars() {
  const [status, setStatus] = React.useState('started');
  const [superstars, setSuperstars] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    Api.fetchDataByEntity(ENTITIES.SUPERSTARS, {
      signal: abortController.signal
    })
      .then(championships => {
        setStatus('resolved');
        setSuperstars(championships);
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
      {superstars.map(superstar => (
        <Card
          key={superstar.name}
          title={superstar.name}
          imageSource={superstar.avatar_url}
        />
      ))}
    </CardGrid>
  );
}
