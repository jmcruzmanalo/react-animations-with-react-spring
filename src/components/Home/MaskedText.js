import React from 'react';
import styled from 'styled-components';
import { animated as a, useSpring } from 'react-spring';

const Item = styled(a.li)`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: inherit;
  padding: 32px 0;
  display: inline-block;
  cursor: pointer;
  color: rgba(37, 48, 105, 0.15);
  width: auto;
`;

const Mask = styled(a.p)`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  color: white;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;

  span {
    padding: 32px 0;
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: auto;
  }
`;

const MaskedText = (props) => {
  const {
    text, hovered, otherHovered, onMouseOver,
  } = props;
  let hoverState = '50%';
  if (hovered) {
    hoverState = '100%';
  } else if (otherHovered) {
    hoverState = '0%';
  }
  const widthSpring = useSpring({
    width: hoverState,
  });
  const colorSpring = useSpring({
    color: otherHovered ? 'rgba(0, 0, 0, 0.2)' : 'rgba(37, 48, 105, 0.15)',
  });

  return (
    <Item style={colorSpring} onMouseOver={onMouseOver}>
      {text}
      <Mask style={widthSpring}>
        <span>{text}</span>
      </Mask>
    </Item>
  );
};

export default MaskedText;
