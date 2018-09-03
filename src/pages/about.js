import React from 'react'

const About = ({data}) => {
  return (
    <div>
      { console.log(data) }
      About Page
    </div>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
export default About
