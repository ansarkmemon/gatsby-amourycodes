import React from 'react';
import { graphql } from 'gatsby';

const NotesTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter}</h1>
    </div>
  );
};

export default NotesTemplate;