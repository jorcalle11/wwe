import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Card({
  title,
  description,
  imageSource,
  imageWidth = '100%',
  cardHeight = 'auto'
}) {
  return (
    <Article height={cardHeight}>
      <Picture>
        <img src={imageSource} alt={title} width={imageWidth} />
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondaryColor);
  height: ${props => props.height};
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
  padding: 30px 0px 10px 10px;

  p {
    margin: 0;
    font-size: 20px;
  }
`;
