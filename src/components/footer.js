import React from 'react'
import styled from 'styled-components'

import { fontFamily, neonGreen, cream } from '../layouts/variables'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  margin-top: 150px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`

const ContactText = styled.p`
  padding: 0 20px;
  font-family: ${fontFamily};
  color: ${cream};
  margin-bottom: 0;
`

const TaglineBox = styled.p`
  font-family: ${fontFamily};
  color: ${neonGreen};
  font-size: 0.8em;
  padding-bottom: 0;
  margin-bottom: 0;
`

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
}

const Footer = () => {
  return (
    <FooterWrapper>
      <TaglineBox>
        Handcrafted by <strong>Amoury</strong> using Gatsby Generator
      </TaglineBox>
      <ContactsBox>
        <ContactText>
          <a href="mailto:amourycodes@gmail.com" style={linkStyle}>
            Email
          </a>
        </ContactText>
        <ContactText>
          <a href="https://www.linkedin.com/in/amoury" target="_blank" style={linkStyle}>
            LinkedIn
          </a>
        </ContactText>
        <ContactText>
          <a href="https://github.com/amoury" target="_blank" style={linkStyle}>
            Github
          </a>
        </ContactText>
        <ContactText>
          <a href="https://codepen.io/amoury/" target="_blank" style={linkStyle}>
            Codepen
          </a>
        </ContactText>
      </ContactsBox>
    </FooterWrapper>
  )
}

export default Footer
