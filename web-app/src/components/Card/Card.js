import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Card({ title, description, imageSource, width = 310 }) {
  return (
    <Article>
      <Picture>
        <img src={imageSource} alt={title} width={width} />
      </Picture>
      <Footer>
        <p>{title}</p>
        {description && <small>{description}</small>}
      </Footer>
    </Article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  description: PropTypes.string
};

const Article = styled.article`
  position: relative;
  background: var(--secondaryColor);
`;

const Picture = styled.picture`
  display: block;
  text-align: center;
  overflow: hidden;
`;

const Footer = styled.div`
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0px 10px;

  p {
    margin: 0;
    font-size: 20px;
  }
`;
