import React from 'react';
import styled from 'styled-components';

export default function CardGrid(props) {
  return <Section>{props.children}</Section>;
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 15px 20px;
`;
