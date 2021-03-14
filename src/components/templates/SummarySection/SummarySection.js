import Container from '@components/elements/Container/Container';
import { graphql, Link as NavLink, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { PostItem, ProjectItem } from './SummaryItems';

const SummarySection = () => {
  const data = useStaticQuery(graphql`
    query {
      blog: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/blog//" }
          frontmatter: { published: { eq: true } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        nodes {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            category
          }
        }
      }
      projects: allContentfulProject(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
      ) {
        totalCount
        nodes {
          id
          title
          demoLink
          sourceLink
          publishedDate
          description {
            excerpt: description
          }
        }
      }
    }
  `);

  const posts = data.blog.nodes;
  const projects = data.projects.nodes;

  return (
    <Container className="py-10 max-w-screen-xl">
      <div className="grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-800">
        <div className="flex flex-col space-y-4 py-8">
          <p className="uppercase tracking-widest text-primary">Latest Posts</p>
          <div className="grid grid-cols-1 gap-6">
            {posts.map((p) => {
              return (
                <PostItem
                  key={p.id}
                  {...p.frontmatter}
                  link={p.fields.slug}
                  timeToRead={p.timeToRead}
                />
              );
            })}
          </div>
          <NavLink className="text-primary hover:underline" to="/blog">
            View All
          </NavLink>
        </div>
        <div className="flex flex-col space-y-4 py-8">
          <h5 className="uppercase tracking-widest text-primary">
            Latest Projects
          </h5>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((p) => {
              return <ProjectItem key={p.id} {...p} />;
            })}
          </div>
          <NavLink className="text-primary hover:underline" to="/projects">
            View All
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default SummarySection;
