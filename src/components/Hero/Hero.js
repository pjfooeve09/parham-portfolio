import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Howdy,
        </SectionTitle>
        <SectionText>
          My name is Parham Javadi. Welcome to my portfolio!
        </SectionText>
        <Link href="https://drive.google.com/file/d/1qYqMsLfyTH6-BKE2rBNakSXRS3IEqmsq/view?usp=sharing" target="_blank"> 
          <h1>My Resume</h1>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
