import { animated as a } from 'react-spring';
import styled from 'styled-components';

const ProjectImageCover = styled(a.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: 10;
`;

export default ProjectImageCover;
