import React from 'react'
import styled from 'styled-components';

import { fontFamily, darkBlue, neonGreen } from './variables';

const StyledTag = styled.span`
  border: 1px solid ${neonGreen};
  border-radius: 3px;
  padding: 2px 9px;
  font-size: 0.8em;
  color: ${ neonGreen };
  font-family: ${ fontFamily };
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
