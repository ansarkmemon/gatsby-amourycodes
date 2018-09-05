import React from 'react'
import styled from 'styled-components';
import { cream, fontFamily } from '../layouts/variables';

const ContactWrapper = styled.div`
  min-height: 70vh;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${cream};
  font-family: ${fontFamily};
`

const Contact = () => {
  return <ContactWrapper>
      <Content>
        <p>Looking forward to hearing from you. </p>
        <span className="green-highlight">Email - </span>
        amourycodes@gmail.com
        <br />
        <span className="green-highlight">Phone - </span>
        (971) 52 913 9295
        <br />
      </Content>
    </ContactWrapper>
}

export default Contact
