import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { fontFamily, neonGreen, darkBlue } from '../layouts/variables';



const StyledButton = styled.button`
  font-size: 0.8em;
  background: ${neonGreen}
  color: ${darkBlue};
  border: 2px solid ${darkBlue};
  padding: 5px 10px;
  display: inline-block;
  font-family: ${fontFamily}
`

const SimpleButton = (props) => {
  return (
    <div>
      <StyledButton>
        { props.gatsbyLink 
          ? 
          <Link to={props.link} style={{ textDecoration: "none", color: "0b2027" }}>
            {props.content}
          </Link>
          :
          <a href={props.link} style={{ textDecoration: "none", color: "0b2027" }}>
            {props.content}
          </a>
        }
      </StyledButton>
    </div>
  )
}

export default SimpleButton
