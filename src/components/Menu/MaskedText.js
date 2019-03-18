import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated as a, useSpring } from 'react-spring';
import { COLORS } from '../../constants';

const Item = styled(a.div)`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: inherit;
  display: inline-block;
  width: auto;
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.3);
`;

const Mask = styled(a.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  color: white;

  > p {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: auto;
    margin: 0;
    padding: 10px 0;
  }
`;

const MaskedText = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    children, otherHovered, onMouseOver, inActiveColor, padding,
  } = props;
  const widthSpring = useSpring({
    width: isHovered ? '100%' : '0%',
  });
  const colorSpring = useSpring({
    color: otherHovered ? 'rgba(0, 0, 0, 0.2)' : 'rgba(37, 48, 105, 0.15)',
  });

  return (
    <Item
      style={{
        ...colorSpring,
        color: inActiveColor,
        padding,
      }}
      onMouseEnter={() => {
        onMouseOver();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (isHovered) {
          setIsHovered(false);
        }
      }}
    >
      {`${children}.`}
      <Mask style={{ ...widthSpring }}>
        <p style={{ padding }}>
          {children}
          <span style={{ color: COLORS.ERROR }}>.</span>
        </p>
      </Mask>
    </Item>
  );
};

MaskedText.propTypes = {
  children: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  inActiveColor: PropTypes.string,
  otherActiveColor: PropTypes.string,
  isHovered: PropTypes.bool,
  otherIsHovered: PropTypes.bool,
  padding: PropTypes.string,
};

export default MaskedText;
