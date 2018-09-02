import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 0.8em;
  background: #4cff00
  color: #0b2027;
  border: 2px solid #0b2027;
  padding: 5px 10px;
  display: inline-block;
`

const SimpleButton = (props) => {
  return (
    <div>
      <StyledButton>
        <Link to={props.link} style={{ textDecoration: "none", color: "0b2027" }}>
          {props.content}
        </Link>
      </StyledButton>
    </div>
  )
}

export default SimpleButton
