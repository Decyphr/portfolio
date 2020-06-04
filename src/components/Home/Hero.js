import React from 'react';

import { Section } from '../style/containers';
import { FlexBox } from "../style/containers";
import { Heading, SubHeading, Paragraph } from "../style/typo";

const Hero = () => {
  return (
    <Section height="60vh" margin="0 0 100px 0">
      <FlexBox>
        <div>
          <SubHeading>Hey. I'm</SubHeading>
          <Heading>Blake<br />Hartman</Heading>
          <Paragraph maxWidth="285px">I build and design websites that are simple, gorgeous, and impactful. Check out some work below!</Paragraph>
        </div>
      </FlexBox>
    </Section>
  );
};

export default Hero;
