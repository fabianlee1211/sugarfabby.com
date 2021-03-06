import Container from '@components/elements/Container/Container';
import ProjectCard from '@components/modules/ProjectCard/ProjectCard';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        totalCount
        nodes {
          title
          demoLink
          sourceLink
          techUsed
          description {
            excerpt: description
          }
          screenshot {
            gatsbyImageData(
              width: 700
              aspectRatio: 1.77
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);
  const projects = data.allContentfulProject.nodes || [];

  return (
    <Container
      className="max-w-screen-xl py-10"
      outerClassName="bg-background-dark flex-1"
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsSection;
