import React from 'react'


import Introduction from '../components/introduction';
import SimpleButton from '../components/simpleButton';
import MainSection from '../layouts/mainSection';
import ProjectCard from '../layouts/projectCard';

import raizuliImg from '../assets/projects/raizuli-image.jpg';

const IndexPage = () => (
  <div>
    <Introduction />
    <MainSection title="About">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores magni
        molestias ipsa illum. Eaque distinctio obcaecati iste quam pariatur
        vitae consequuntur accusamus enim ut deleniti! 
      </p>
      <p>
        Neque ut ipsa
        exercitationem culpa? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Maiores magni molestias ipsa illum. Eaque distinctio
        obcaecati iste quam pariatur vitae consequuntur accusamus enim ut
        deleniti! Neque ut ipsa exercitationem culpa?
      </p>
      <SimpleButton link="/about/" content="Read More"/>
    </MainSection>

    <MainSection title="Projects">
      <ProjectCard 
        siteLink="https://www.theraizuli.com"
        image={raizuliImg} 
        title="The Raizuli Design" 
        tags={['squarespace', 'scss']}
      />
      <ProjectCard 
        siteLink="https://www.theraizuli.com"
        image={raizuliImg} 
        title="The Raizuli Design" 
        tags={['squarespace', 'scss']}
      />
    </MainSection>
  </div>
)

export default IndexPage
