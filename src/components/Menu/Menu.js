import React, { useState, useRef } from 'react';
import {
  animated as a, useChain, useSpring, useTrail,
} from 'react-spring';
import styled from 'styled-components';
import Cover from './Cover';
import MaskedText from './MaskedText';

const Container = styled('div')`
  position: fixed;
  display: inline;
  z-index: 100;
`;

const Trigger = styled('button')`
  position: fixed;
  top: 64px;
  right: 64px;
`;

const Content = styled(a.div)`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;

  > div {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;

    &:first-of-type {
      left: 0;
    }
    &:last-of-type {
      right: 0;
    }
  }
`;

const Links = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 800;
  text-transform: lowercase;
  padding-right: 120px;

  li {
    font-size: 85px;
    transform-origin: 100% 25%;
  }
`;

const Menu = () => {
  const [show, setShow] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const links = ['Work', 'Studio', 'Team', 'contact', 'funhouse'];

  // react-spring
  const coverRef = useRef();
  const coverSpring = useSpring({
    transform: show ? 'translate(50%, -50%) scale(1)' : 'translate(50%, -50%) scale(0)',
    ref: coverRef,
  });
  const displayRef = useRef();
  const displayMenu = useSpring({
    display: show ? 'block' : 'none',
    ref: displayRef,
  });
  const listTrailRef = useRef();
  const listTrail = useTrail(links.length, {
    opacity: show ? 1 : 0,
    transform: show ? 'scale(1)' : 'scale(0.6)',
    config: {
      tension: 450,
    },
    ref: listTrailRef,
  });

  useChain(
    show ? [coverRef, displayRef, listTrailRef] : [listTrailRef, displayRef, coverRef],
    show ? [0, 0, 0.2] : [0, 0.4, 0.2],
  );
  // end of react-spring

  const onMouseOver = (i) => {
    setHoverIndex(i);
  };

  return (
    <Container>
      <Cover style={coverSpring} />
      <Content style={displayMenu}>
        <div>
          <p>Image will be here</p>
        </div>
        <div>
          <Links>
            {listTrail.map((trailProp, i) => (
              <a.li style={trailProp}>
                <MaskedText
                  key={`${links[i]}_key`}
                  onMouseOver={() => onMouseOver(i)}
                >
                  {links[i]}
                </MaskedText>
              </a.li>
            ))}
          </Links>
        </div>
      </Content>
      <Trigger type="button" onClick={() => setShow(!show)}>
        Menu
      </Trigger>
    </Container>
  );
};

export default Menu;
