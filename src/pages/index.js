import React, { Component } from 'react';


import Introduction from '../components/introduction';
import SimpleButton from '../components/simpleButton';
import MainSection from '../layouts/mainSection';
import ProjectCard from '../layouts/projectCard';
import SkillAreaCard from '../layouts/skillAreaCard';

import raizuliImg from '../assets/projects/raizuli-image.jpg';
import khushiImg from '../assets/projects/khushi-jewellers.jpg';
import EducationCard from '../layouts/educationCard';



class IndexPage extends Component {
  state = {
    projects: [
      {
        id: '0001',
        siteLink: 'https://www.theraizuli.com',
        image: raizuliImg,
        title: 'The Raizuli Design',
        tags: ['squarespace', 'scss'],
      },
      {
        id: '0002',
        siteLink: 'http://www.khushijewellers.com',
        image: khushiImg,
        title: 'Khushi Jewellers Website',
        tags: ['wordpress', 'scss', 'jQuery', 'theme development'],
      },
    ],
    education: [
      {
        id: "001",
        degreeTitle: 'PGD in Software Engineering',
        duration: '2018 - 2019',
        specialization: 'Blockchain Development Specialization',
        university: 'IIIT Bangalore, India'
      },
      {
        id: "002",
        degreeTitle: 'Masters in Business Administration (MBA)',
        duration: '2011 - 2013',
        specialization: 'Finance Specialization',
        university: 'Mahe Manipal, India'
      },
      {
        id: "003",
        degreeTitle: 'Bachelors of Engineering',
        duration: '2006 - 2010',
        specialization: 'Electronics and Communications',
        university: 'Birla Institute of Technology - Mesra, Ranchi, India'
      },
    ],
  }

  render() {
    const renderProjects = this.state.projects.map(project => {
      return (
        <ProjectCard
          key={project.id}
          siteLink={project.siteLink}
          image={project.image}
          title={project.title}
          tags={project.tags}
        />
      )
    });

    const renderEducation = this.state.education.map( education => {
      return <EducationCard key={education.id} education={education} />
    })

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
          <SimpleButton link="/about/" content="Read More" />
        </MainSection>

        <MainSection title="Projects">
          {renderProjects}

          <SimpleButton link="/projects/" content="All Projects" />
        </MainSection>

        <MainSection title="Skills">
          <SkillAreaCard
            title="Frontend Technologies"
            skills={[
              'Javascript(ES6)',
              'HTML',
              'CSS',
              'Sass',
              'Pug',
              'React',
              'Angular',
              'Vue',
            ]}
          />
          <SkillAreaCard
            title="Design"
            skills={['Adobe Illustrator', 'Photoshop', 'Sketch']}
          />
        </MainSection>

        <MainSection title="Education">
          { renderEducation }
        </MainSection>

        <MainSection title="Experience" />
      </div>
    )
  }
}

export default IndexPage;
