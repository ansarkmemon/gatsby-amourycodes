import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
  }
`;

const StyledDescription = styled.div`
  margin-left: 30px;
  color: #f6f1d1;

  @media (min-width: 768px) {
    flex: 3;
    border-left: 3px solid #4cff00;
    padding-left: 30px;
    padding-bottom: 50px;
  }
`

const StyledTitle = styled.h2`
  font-size: 0.9em;
  color: #4cff00;
  font-family: 'Space Mono', monospace;
  text-transform : uppercase;
  letter-spacing: 0.09em;
  position: relative;
  padding-top: 5px;

  @media (min-width: 768px) {
    text-align: right;
    color: #f6f1d1;
  }

  &:after {
    @media (min-width: 768px) {
      content: "";
      position: absolute;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: #4cff00;
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
