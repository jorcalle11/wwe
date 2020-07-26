import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Error({ message }) {
  return (
    <Div>
      <p>
        <span role="img" aria-label="error">
          ❌
        </span>
        Oops! there was a problem trying to request the data. Try again later
      </p>
      <p>{message}</p>
    </Div>
  );
}

Error.propTypes = {
  message: PropTypes.string
};

const Div = styled.div`
  border-left: 2px solid red;
  margin-left: 20px;
  padding: 20px 5px;
`;
