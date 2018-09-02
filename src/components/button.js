import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { neonGreen, darkBlue } from '../layouts/variables';

const StyledButton = styled.button`
  font-size: 0.8em;
  color: ${ darkBlue };
  border: 2px solid ${darkBlue};
  padding: 5px 10px;
  background: ${ neonGreen };
  display: inline-block;
  z-index: 2;
  box-shadow: -6px 5px 0 0 #efd0ca, -2px 1px 0 1px ${darkBlue};
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: -2px 1px 0 0 #228b22, -2px 1px 0 2px #0b2027;
    transform: translate3d(-4px, 4px, 0);
  }
`

const Button = (props) => {
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

export default Button
