import styled from 'styled-components';
import { COLORS } from '../../constants';

const ProjectImageContainer = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.PRIMARY};
  overflow: hidden;

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    img {
      object-fit: cover;
      object-position: 50% 50%;
      height: 100%;
      width: 100%;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: black;
      opacity: 0.5;
    }
  }
`;

export default ProjectImageContainer;
