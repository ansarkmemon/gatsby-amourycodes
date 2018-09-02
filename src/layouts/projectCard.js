import React from 'react';
import styled from 'styled-components';
import Tag from './tag';

const StyledCard = styled.div`
  width: 100%;
  border-radius: 10px;
  background-image: ${props => props.image ? `url(${props.image})` : 'none' };
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  min-height: 150px;
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
  background: rgba(11, 32, 39, 0.8);
  transition: background 0.3s ease-out;

  &:hover {
    background: rgba(11, 32, 39, 0.5);
  }
`

const ProjectTitle = styled.h3`
  font-weight: 400;
  font-family: 'Space Mono', monospace;
  padding-bottom: 20px;
  margin-bottom: 0;
  color: #4cff00;
  font-size: 0.9em;

`

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
`

const ProjectLink = {
  color: "inherit",
  textDecoration: "none"
}

const ProjectCard = (props) => {

  const renderTags = props.tags.map( tag => <Tag key={tag} text={tag} />)

  return (
    <StyledCard {...props}>
      <OverlayCard>
        <ContentBox>
          <ProjectTitle>
            <a href={props.siteLink} target="_blank" style={ProjectLink}>
              {props.title}
            </a>
          </ProjectTitle>
          { renderTags }
        </ContentBox>
      </OverlayCard>
    </StyledCard>
  )
}

export default ProjectCard
