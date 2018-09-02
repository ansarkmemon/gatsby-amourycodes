import React from 'react';
import styled from 'styled-components';

import { fontFamily, cream, neonGreen, fontRoboto } from './variables';


const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin-top: 150px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
  }
`;

const StyledDescription = styled.div`
  margin-left: 30px;
  color: ${ cream };
  font-family: ${ fontRoboto };

  @media (min-width: 768px) {
    flex: 3;
    border-left: 3px solid ${ neonGreen };
    padding-left: 30px;
    padding-bottom: 150px;
  }
`

const StyledTitle = styled.h2`
  font-size: 0.9em;
  color: ${ neonGreen };
  font-family: ${fontFamily};
  text-transform : uppercase;
  letter-spacing: 0.09em;
  position: relative;
  padding-top: 5px;

  @media (min-width: 768px) {
    text-align: right;
    color: ${ cream };
  }

  &:after {
    @media (min-width: 768px) {
      content: "";
      position: absolute;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: ${ neonGreen };
      right: -61px;
      top: 0;
    }
  }
`

const LeftColumn = styled.div`
  @media (min-width: 768px) {
    padding-right: 20px;
    text-align: right;
    flex: 1;
  }
`

const MainSection = (props) => {
  return (
    <StyledSection>
      <LeftColumn>
        <StyledTitle>{props.title}</StyledTitle>
      </LeftColumn>
    
      <StyledDescription>
        {props.children}
      </StyledDescription>
    </StyledSection>
  )
}

export default MainSection;
 