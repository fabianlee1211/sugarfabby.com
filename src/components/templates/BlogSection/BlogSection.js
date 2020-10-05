import Box from '@components/elements/Box/Box';
import Button from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
import { useGroupedPosts } from '@hooks/useGroupedPosts';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { PostItem } from '../SummarySection/SummaryItems';

const BlogContainer = styled(Container)`
  flex: 1 0 auto;
  background: var(--color-background-dark);
  > div {
    text-align: left;
    padding: 70px 20px;
    max-width: 1120px;
  }
`;

const PostWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  background: var(--color-background);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .gatsby-image-wrapper {
    border-radius: 10px 10px 0 0;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 30% 1fr;
    .gatsby-image-wrapper {
      border-radius: 10px 0 0 10px;
      margin-right: 5px;
    }
  }
`;

const BlogSection = () => {
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
            banner {
              childImageSharp {
                fluid(maxWidth: 728, quality: 90) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  `);

  const { posts, appendPosts, hasMorePosts } = useGroupedPosts(data.blog.nodes);

  return (
    <BlogContainer>
      {posts.map((p, i) => {
        return (
          <PostWrapper key={i} mb="20px">
            <Img
              fluid={{
                ...p.frontmatter.banner.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
              alt="post-banner"
            />
            <PostItem
              {...p.frontmatter}
              link={p.fields.slug}
              timeToRead={p.timeToRead}
              style={{ margin: 0, alignSelf: 'center', padding: '20px' }}
            />
          </PostWrapper>
        );
      })}
      {hasMorePosts && (
        <Box justifyContent="center" pt="20px">
          <Button alt="Load more posts" onClick={appendPosts}>
            Load More
          </Button>
        </Box>
      )}
    </BlogContainer>
  );
};

export default BlogSection;
