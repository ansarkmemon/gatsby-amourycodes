import React from 'react'
import styled from 'styled-components';
import Button from './button';

import { fontFamily, fontRoboto, neonGreen, cream } from '../layouts/variables';


const IntroductionDiv = styled.div`
  color: ${ cream };
  font-family: ${ fontRoboto };
  font-size: 1em;
  font-weight: 300;
  min-height: 90vh;
  line-height: 1.6em;
  position: relative;
  margin-bottom: 250px;

  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`
const Slash = styled.span`
  color: ${ neonGreen };
  font-weight: 700;
`

const Text = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const Contact = styled.div`
  position: absolute;
  bottom: 10%;
  font-size: 0.8em;
  left: 50%;
  transform: translateX(-50%);
`
const Introduction = () => {
  return (
    <IntroductionDiv>
      <Text>
        <p>Hello,</p>

        <p>
          I'm{' '}
          <strong style={{ fontWeight: '500' }}>
            Ansar Memon <Slash> / </Slash>Amoury
          </strong>{' '}
          <Slash> > </Slash> a full-stack software engineer with an eye for well designed
          interfaces &amp; experiences
        </p>
      </Text>

      <Contact>
        <Button content="Get in touch" link="/contact/"/>
      </Contact>
    </IntroductionDiv>
  )
}

export default Introduction
