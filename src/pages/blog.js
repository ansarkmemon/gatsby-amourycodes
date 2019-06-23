import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        { console.log(this.props)}
      </div>
    )
  }
}

export const BlogQuery = graphql`
  query BlogQuery {
    articles: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "article" } } }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
          }

          html
        }
      }
    }
  }
`