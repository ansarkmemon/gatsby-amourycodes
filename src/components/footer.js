import React from 'react';
import styled from 'styled-components';

import { fontFamily, neonGreen, cream } from '../layouts/variables';

const FooterWrapper = styled.footer`
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
`

const ContactsBox = styled.div`
  display: flex;
`

const ContactText = styled.p`
  padding: 0 20px;
`

const TaglineBox = styled.p`
  font-family: ${fontFamily};
  color: ${neonGreen};
  font-size: 0.8em;
  padding-bottom: 0;
  margin-bottom: 0;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <TaglineBox>
        Handcrafted by <strong>Amoury</strong> using Gatsby Generator
      </TaglineBox>
      <ContactsBox>
        <ContactText>Email</ContactText>
        <ContactText>Email</ContactText>
        <ContactText>Email</ContactText>
        <ContactText>Email</ContactText>
        <ContactText>Email</ContactText>
        <ContactText>Email</ContactText>
      </ContactsBox>
    </FooterWrapper>
  )
}

export default Footer
