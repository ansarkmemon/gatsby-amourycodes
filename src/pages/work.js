import React from 'react';
import styled from 'styled-components';

import LargeProjectCard from '../layouts/largeProjectCard';

const MainWrapper = styled.div`
  margin-top: 50vw;
  min-height: 100vh;

  @media(min-width: 768px) {
    margin-top: 20vw;
  }
`
const Work = ({ data }) => {
  return (
    <MainWrapper>
      
      { data.allMarkdownRemark.edges.map( project => {
        const { frontmatter } = project.node;
        return <LargeProjectCard key={frontmatter.id} project={frontmatter} />
      }) }
      
    </MainWrapper>
  )
}

export default Work

export const WorkQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          frontmatter {
            id
            title
            siteLink
            tags
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
