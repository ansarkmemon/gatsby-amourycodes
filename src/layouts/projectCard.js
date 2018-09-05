import React from 'react';
import styled from 'styled-components';
import Tag from './tag';


import { fontRoboto, cream } from './variables';

const StyledCard = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  min-height: 150px;
  max-height: 150px;
  overflow: hidden;
  margin: 20px 0;


  &:first-child {
    margin: 0;
  }
`

const OverlayCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: ${ props =>
    props.publicURL
      ? `linear-gradient(rgba(11, 32, 39, 0.8), rgba(11, 32, 39, 0.8)), url(${ props.publicURL })`
      : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.2);
    background-image: ${ props =>
      props.publicURL
        ? `linear-gradient(rgba(11, 32, 39, 0.5), rgba(11, 32, 39, 0.5)), url(${ props.publicURL })`
        : 'none'};
  }
`

const ProjectTitle = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  color: ${ cream };
  font-family: ${ fontRoboto };
  padding-bottom: 20px;
  margin-bottom: 0;
  letter-spacing: 0.08em;
  font-size: 0.9em;

`

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
`;

const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const ProjectLink = {
  color: "inherit",
  textDecoration: "none"
}

const ProjectCard = (props) => {
  const { siteLink, title, tags, image } = props.project;
  const renderTags = tags.map( tag => <Tag key={tag} text={tag} />)

  return (
    <StyledCard>
      <OverlayCard {...props.project.image}></OverlayCard>
        <ContentBox>
          <ProjectTitle>
            <a href={siteLink} target="_blank" style={ProjectLink} rel="noreferrer">
              {title}
            </a>
          </ProjectTitle>

          <TagsBox>
            { renderTags }
          </TagsBox>
        </ContentBox>
    </StyledCard>
  )
}

export default ProjectCard
