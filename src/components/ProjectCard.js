import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Paragraph } from './style/typo';



const ProjectCard = ({ title, image }) => {
  return (
    <Card image={image}>
      <div className="proj">
        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="fx">
            <Paragraph>{title}</Paragraph>
          </div>
        </motion.div>
      </div>
    </Card>
  );
};

/*
Possible transitions
<motion.div initial={{ x: 400 }} animate={{ x: -400 }} transition={{ duration: 45 }}>

*/

const Card = styled.div`
  overflow: hidden;
  flex: 1;
  margin: 0 15px;
  min-width: 350px;
  height: 250px;
  position: relative;
  top: -50px;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  
  &:hover {
    top: -60px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.9);

    .proj {
      transform: scale(1.05);
    }
  } 

  &:active {
    transform: scale(.95);
  }

  .proj {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.poppins};
    transition: 0.3s;

    .fx {
      background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default ProjectCard;
