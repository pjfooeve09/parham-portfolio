import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, h2, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Parham Javadi</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <h2 style={{cursor: 'pointer'}}>Projects</h2>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <h2 style={{cursor: 'pointer'}}>Skills</h2>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <h2 style={{cursor: 'pointer'}}>About</h2>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="mailto:pjfooeve09@yahoo.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/pjfooeve09">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/parham-javadi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
