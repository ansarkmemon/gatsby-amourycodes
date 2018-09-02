import React from 'react'
import styled from 'styled-components';

const StyledTag = styled.span`
  background: #4cff00;
  padding: 2px 9px;
  font-size: 0.8em;
  color: #0b2027;
  font-family: 'Space Mono', monospace;
  margin: 5px;
`

const Tag = ({ text }) => {
  return (
    <StyledTag>
      { text }  
    </StyledTag>
  )
}

export default Tag
