import Container from '@components/elements/Container/Container';
import ProjectCard from '@components/modules/ProjectCard/ProjectCard';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background: var(--color-background-dark);
  > div {
    padding: 70px 20px;
    max-width: 1120px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectsSection = ({ ...props }) => {
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
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `);
  const projects = data.allContentfulProject.nodes || [];

  return (
    <StyledContainer {...props}>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </StyledContainer>
  );
};

export default ProjectsSection;
