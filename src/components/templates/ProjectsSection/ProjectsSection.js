import { SecondaryButton } from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
import ProjectCard from '@components/modules/ProjectCard/ProjectCard';
import { useGroupItems } from '@hooks/useGroupItems';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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

  const { items, appendItems, hasMoreItems } = useGroupItems(
    data.allContentfulProject.nodes,
  );

  return (
    <Container
      className="max-w-screen-xl py-10"
      outerClassName="bg-background-dark flex-1"
    >
      <motion.ul
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {items.map((project) => (
          <motion.li variants={item} key={project.title}>
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </motion.ul>

      {hasMoreItems && (
        <div className="flex justify-center pt-8">
          <SecondaryButton
            alt="Load more posts"
            onClick={appendItems}
            className="w-28"
          >
            Load More
          </SecondaryButton>
        </div>
      )}
    </Container>
  );
};

export default ProjectsSection;
