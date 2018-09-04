import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { fontFamily, cream, neonGreen } from '../layouts/variables';
import SimpleButton from '../components/simpleButton';
import resume from '../assets/files/2018_Ind_noi_CV Design.pdf';

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 40vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;  
  }

`

const Column = styled.div`
  font-family: ${ fontFamily };
  color: ${ cream };
`

const TitleBox = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    position: fixed;
  }
`

const Title = styled.h1`
  font-family: ${ fontFamily };
  font-size: 1.3em;
  color: ${ neonGreen };
  margin-bottom: 10px;
`

const fontStyles = {
  color: 'white',
  fontSize: '1.3em',
};

const ContactBox = styled.div`
  margin: 20px 0;
  display: flex;
  width: 150px;
  justify-content: space-evenly;
`

const ContactLink = styled.a`
  color: ${ cream };
  transition: color 0.3s ease-out;

  &:hover {
    color: ${ neonGreen };
  }
`


const About = ({ data }) => {
  const {html} = data.allMarkdownRemark.edges[0].node;
  
  return (
    <Grid>
      <Column style={{ maxHeight:"100vh", flex: "1 0 0" }}>
        <TitleBox>
          <Title>Amoury</Title>
          <ContactBox>
            <ContactLink href="http://www.github.com/amoury" target="_blank">
              <FontAwesomeIcon icon={faGithub} style={fontStyles} />
            </ContactLink>
            <ContactLink href="http://www.codepen.io/amoury">
              <FontAwesomeIcon icon={faCodepen} style={fontStyles} />
            </ContactLink>
            <ContactLink href="http://www.linkedin.com/in/amoury">
              <FontAwesomeIcon icon={faLinkedin} style={fontStyles} />
            </ContactLink>
          </ContactBox>
          <SimpleButton gatsbyLink={false} link={resume} content="View My CV"/>
        </TitleBox>
      </Column>
      <Column style={{ flex: "2 0 0" }} dangerouslySetInnerHTML={{ __html: html }}>
      </Column>
    </Grid>
  )
}


export default About


export const AboutQuery = graphql`
  query AboutQuery {
    allMarkdownRemark( filter:{ frontmatter:{ type: { eq: "about"}}}) {
     edges {
       node {
         html
       }
     }
   }
  }
`