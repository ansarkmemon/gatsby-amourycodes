import React from 'react';

const Notes = ({ data }) => {
  console.log(data);
  return(
    <div>
      hello
    </div>
  )
};

export default Notes;


export const notes = graphql`
  query NotesQuery {
    allMarkdownRemark(
      filter: { frontmatter: {type: {eq: "notes" }}},
    ) {
      edges {
        node {
          frontmatter{
            title
          }
          timeToRead
          parent{
            ... on File{
              modifiedTime
            }
          }
        }
      }
    }
  } 
`