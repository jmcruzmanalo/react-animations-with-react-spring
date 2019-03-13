import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, useSprings, animated as a } from 'react-spring';
import MaxDiv from '../components/UI/MaxDiv';
import ProjectImageCover from '../components/Home/ProjectImageCover';
import ProjectImageContainer from '../components/Home/ProjectImageContainer';
import betchesImg from '../assets/portfolio/p-betches.jpg';
import allpro from '../assets/portfolio/p-allpro.jpg';
import cornerstone from '../assets/portfolio/p-cornerstone.jpg';
import MaskedListItem from '../components/Home/MaskedListItem';

const Root = styled(MaxDiv)`
  position: relative;
  padding-top: 52px;
  overflow: none;
`;

const PageIndicator = styled('h1')`
  position: relative;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 0 0 52px 0;
`;

const ProjectsList = styled('ul')`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  overflow: auto;
  padding: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

const images = [betchesImg, allpro, cornerstone];

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const projectImageCover = useSpring({
    transform: isHovering ? 'translateX(-100%)' : 'translateX(0%)',
  });
  const [piSprings, piSet] = useSprings(images.length, () => ({
    opacity: 0,
    transform: 'scale(1)',
  }));
  useEffect(() => {
    piSet((i) => {
      const shouldShow = isHovering && hoverIndex === i;
      return {
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? 'scale(1.08)' : 'scale(1)',
        config: shouldShow ? { delay: 5000 } : { duration: 200 },
        delay: shouldShow ? 200 : 0,
      };
    });
  }, [isHovering, hoverIndex]);

  const listItems = [
    'betches',
    'allpro',
    'cornerstone',
    // 'taylor',
    // 'modernmd',
    // 'storyverse',
    // 'gtscareers',
    // 'hennessey',
  ];

  const mouseOver = (index) => {
    setIsHovering(true);
    setHoverIndex(index);
  };
  const mouseOut = () => {
    setIsHovering(false);
    setHoverIndex(null);
  };

  return (
    <Root>
      <ProjectImageContainer>
        {piSprings.map((props, index) => {
          const img = images[index];
          return (
            <a.div style={props}>
              <img src={img} alt="" />
            </a.div>
          );
        })}
      </ProjectImageContainer>
      <ProjectImageCover style={projectImageCover} />
      <PageIndicator>Our Projects</PageIndicator>
      <ProjectsList onMouseOver={mouseOut}>
        {listItems.map((item, index) => (
          <MaskedListItem
            key={`${item.text}_key`}
            onMouseOver={(e) => {
              e.stopPropagation();
              mouseOver(index);
            }}
            hovered={index === hoverIndex}
            otherHovered={isHovering}
            text={item}
          />
        ))}
      </ProjectsList>
    </Root>
  );
};

export default Home;
