import React from 'react'
// dangerouslySetInnerHTML

const Work = ({ data }) => {
  const renderProjects = data.allMarkdownRemark.edges.map(edge => {
    return (
      <div key={edge.node.frontmatter.title}>
        <h1>{edge.node.frontmatter.title}</h1>
      </div>
    )
  })

  return (
    <div>
      { console.log(data) }
      Work
      {renderProjects}
    </div>
  )
}

export const query = graphql`
  query AllQuery {
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

export default Work
