// import Link from 'next/link';
import {  Link } from '../../styles/GlobalComponents';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, h1, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
     
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <h1 style={{cursor: 'pointer', color: '#F0FFFF', marginLeft: -140}}>Projects</h1>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <h1 style={{cursor: 'pointer', color: '#F0FFFF', marginRight: 70}}>Skills</h1>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <h1 style={{cursor: 'pointer', color: '#F0FFFF'}}>About</h1>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons style={{marginTop: 15}} href="mailto:pjfooeve09@yahoo.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
      <SocialIcons style={{marginTop: 15}} href="https://github.com/pjfooeve09">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons style={{marginTop: 15}} href="https://www.linkedin.com/in/parham-javadi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
