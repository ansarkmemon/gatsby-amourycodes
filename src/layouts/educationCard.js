import React from 'react';
import styled from 'styled-components';

import { fontFamily, fontRoboto, cream, neonGreen } from './variables';

const Card = styled.div`
  width: 100%;
  margin-bottom: 50px;
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const Title = styled.div`
  font-family: ${ fontRoboto };
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.08em;
`;

const University = styled(Title)`
  font-size: 0.7em;
  font-weight: 300;
`

const Date = styled.p`
  font-family: ${fontFamily};
  color: ${cream};
  font-weight: 300;
  font-size: 0.8em;
  margin-bottom: 0;
`

const Specialization = styled(Title)`
  color: ${neonGreen};
`

const EducationCard = (props) => {
  return (
    <Card>
      <TitleBox>
        <Title>{props.education.degreeTitle}</Title>
        <Date>{props.education.duration}</Date>
      </TitleBox>
      <Specialization>{props.education.specialization}</Specialization>
      <University>{ props.education.university }</University>
    </Card>
  )
}

export default EducationCard
