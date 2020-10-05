import Container from '@components/elements/Container/Container';
import Text from '@components/elements/Text/Text';
import { graphql, Link as NavLink, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { PostItem, ProjectItem } from './SummaryItems';

const StyledContainer = styled(Container)`
  background: var(--color-background);
  > div {
    text-align: left;
    max-width: 1120px;
    padding: 70px 20px;
  }
`;

const Header = styled(Text)`
  margin-top: 0;
  margin-bottom: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-primary);
`;

const Divider = styled.hr`
  margin: 40px 0;
  border: 0;
  border-top: 1px solid var(--color-border);
`;

const ViewAll = styled(NavLink)`
  color: var(--color-primary);

  :hover {
    text-decoration: underline;
  }
`;

const SummarySection = () => {
  const data = useStaticQuery(graphql`
    query {
      blog: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/blog//" }
          frontmatter: { published: { eq: true } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
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

  const posts = data.blog.nodes.slice(0, 3);
  const projects = data.projects.nodes.slice(0, 3);

  return (
    <StyledContainer>
      <Header>Latest Posts</Header>
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
      <ViewAll to="/blog">View All</ViewAll>
      <Divider />
      <Header>Latest Projects</Header>
      {projects.map((p) => {
        return <ProjectItem key={p.id} {...p} />;
      })}
      <ViewAll to="/projects">View All</ViewAll>
    </StyledContainer>
  );
};

export default SummarySection;
