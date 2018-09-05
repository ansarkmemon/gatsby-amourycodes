import React from 'react';


import Introduction from '../components/introduction';
import SimpleButton from '../components/simpleButton';
import MainSection from '../layouts/mainSection';
import ProjectCard from '../layouts/projectCard';
import SkillAreaCard from '../layouts/skillAreaCard';
import resumeFile from '../assets/files/2018_Ind_noi_CV Design.pdf';
import EducationCard from '../layouts/educationCard';
import EndSection from '../layouts/endSection';

const Home = (props) => {
  console.log(props.data);
  if(!props.data) return <div>"Error"</div>
  const { education, projects, work, skills } = props.data;

  const newProjects = projects.edges.map ( project => {
    const { frontmatter } = project.node;
    return <ProjectCard key={frontmatter.id} project={frontmatter} />
  } );

  const renderEducation = education.edges.map ( education => {
    const { frontmatter } = education.node;
    return <EducationCard key={frontmatter.id} education={frontmatter} />
  });

  const renderWork = work.edges.map( education => {
    const { frontmatter } = education.node;
    return <EducationCard key={frontmatter.id} education={frontmatter} />
  });

  const renderSkills = skills.edges.map( skill => {
    const { frontmatter } = skill.node;
    return <SkillAreaCard key={ frontmatter.title } title={frontmatter.title} skills={frontmatter.skillList} />
  });

  return (
    <div>
      <Introduction />
      
      <MainSection title="About">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          magni molestias ipsa illum. Eaque distinctio obcaecati iste quam
          pariatur vitae consequuntur accusamus enim ut deleniti!
        </p>
        <p>
          Neque ut ipsa exercitationem culpa? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Maiores magni molestias ipsa illum.
          Eaque distinctio obcaecati iste quam pariatur vitae consequuntur
          accusamus enim ut deleniti! Neque ut ipsa exercitationem culpa?
        </p>
        <SimpleButton gatsbyLink={true} link="/about/" content="Read More" />
      </MainSection>

      <MainSection title="Projects">
        { newProjects }
        <SimpleButton gatsbyLink={true} link="/work/" content="All Projects" />
      </MainSection>

      <MainSection title="Skills">
        { renderSkills }
      </MainSection>

      <MainSection title="Education">
        {renderEducation}

        <SimpleButton gatsbyLink={false} link={resumeFile} content="View My Resume" />
      </MainSection>

      <EndSection title="Experience">
        {renderWork}
      </EndSection>

    </div>
  )
}

export default Home



export const IndexQuery = graphql`
         query HomeQuery {
           projects: allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }, limit: 3) {
             edges {
               node {
                 frontmatter {
                   id
                   title
                   siteLink
                   tags
                   image {
                     publicURL
                   }
                 }
               }
             }
           }

           education: allMarkdownRemark(filter: { frontmatter: { type: { eq: "education" } } }, sort: { fields: [frontmatter___order], order: DESC }) {
             edges {
               node {
                 frontmatter {
                   id
                   degreeTitle
                   duration
                   university
                 }
               }
             }
           }

           work: allMarkdownRemark(filter: { frontmatter: { type: { eq: "experience" } } }, sort: { fields: [frontmatter___order], order: DESC }) {
             edges {
               node {
                 frontmatter {
                   id
                   degreeTitle
                   duration
                   university
                 }
               }
             }
           }

           skills: allMarkdownRemark(filter: { frontmatter: { type: { eq: "skills" } } }) {
             edges {
               node {
                 frontmatter {
                   title
                   skillList
                 }
               }
             }
           }
         }
       `


