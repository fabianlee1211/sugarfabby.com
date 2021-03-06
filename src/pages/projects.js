import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Footer from '@components/modules/Footer/Footer';
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection';
import * as React from 'react';

const ProjectsPage = () => {
  return (
    <>
      <SEO />
      <Container className="pt-24 pb-8 max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-2 text-primary">Projects</h2>
        <p className="text-lg">Collection of web development side projects.</p>
      </Container>
      <ProjectsSection id="projects" />
      <Footer />
    </>
  );
};

export default ProjectsPage;
