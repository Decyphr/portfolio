import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import ProjectCard from '../ProjectCard';
import { Button } from '../style/buttons';
import { FlexBox } from '../style/containers';

const ProjectBanner = ({ projects }) => {
  const xDragConstraint = 400 * (projects.length - 2);

  return (
    <Container>
      <motion.div drag="x" dragConstraints={{ left: (-1 * xDragConstraint), right: xDragConstraint }}>
        <div className="draggable" style={{ width: `calc(100vw + ${xDragConstraint} + 400px)` }}>
          {projects.map(project => (
            <>
              <ProjectCard title={project.node.title} image={project.node.image.file.url} />
              <ProjectCard title={project.node.title} image={project.node.image.file.url} />
            </>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};

  .draggable {
    display: flex;
    align-items: center;
    justify-content: space-around;


    @media (max-width: ${({ theme }) => theme.screenSize.md}) {
      flex-direction: column;
    }
  }
`;

ProjectBanner.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectBanner;
