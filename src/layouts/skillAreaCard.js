import React from 'react';
import styled from 'styled-components';

import Tag from './tag';
import { fontRoboto } from './variables';

const CardWrapper = styled.div`
  margin-top: 35px;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-family: ${fontRoboto};
  font-weight: 500;
  font-size: 0.8em;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
`;

const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const SkillAreaCard = props => {
  const renderSkills = props.skills.map( skill => {
    return <Tag key={skill} text={skill} />
  });

  return (
    <CardWrapper>
      <StyledTitle>{props.title}</StyledTitle>
      <TagsBox>
        { renderSkills }
      </TagsBox>
    </CardWrapper>
  )
}

export default SkillAreaCard
