import React from 'react';
import { animated as a } from 'react-spring';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const Circle = styled(a.div)`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(50%, -50%) scale(0);
  background-color: ${COLORS.MENU_COVER};
  border-radius: 50%;
  width: 250vw;
  height: 250vw;
`;

const Cover = props => <Circle {...props} />;

export default Cover;
