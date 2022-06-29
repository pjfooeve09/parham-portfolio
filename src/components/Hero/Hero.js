import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          My name is Parham Javadi and I am a Full Stack Software Developer.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/file/d/1_F0rHecBE_l1tv6JbQq-xhFgCEEfz5FB/view?usp=sharing';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
