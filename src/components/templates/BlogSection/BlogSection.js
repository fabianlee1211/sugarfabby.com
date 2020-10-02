import Box from '@components/elements/Box/Box';
import Button from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
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
    max-width: 992px;
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
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 30% 1fr;
    .gatsby-image-wrapper {
      border-radius: 10px 0 0 10px;
    }
  }
`;

const PAGINATION_SIZE = 5;

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

  const [groupedPosts, setGroupedPosts] = React.useState([]);
  // Prevent a height changing flash at first load
  const [posts, setPosts] = React.useState(
    data.blog.nodes.slice(0, PAGINATION_SIZE),
  );
  const [offset, setOffset] = React.useState(0);

  // Set the first group of posts to show
  React.useEffect(() => {
    if (groupedPosts.length && offset === 0) {
      setPosts(groupedPosts[offset]);
      setOffset((prev) => prev + 1);
    }
  }, [groupedPosts, offset]);

  // Group posts by pagination size
  React.useEffect(() => {
    let start = 0;
    let groups = Array.from(
      Array(Math.ceil(data.blog.nodes.length / PAGINATION_SIZE)),
    );
    groups = groups.map(() => {
      const group = data.blog.nodes.slice(start, start + PAGINATION_SIZE);
      start += PAGINATION_SIZE;
      return group;
    });

    setGroupedPosts(groups);
  }, [data.blog.nodes]);

  const appendPosts = () => {
    if (groupedPosts[offset] && groupedPosts[offset].length) {
      setPosts((prev) => [...prev, ...groupedPosts[offset]]);
      setOffset((prev) => prev + 1);
    }
  };

  const hasMorePosts = offset !== groupedPosts.length;

  return (
    <BlogContainer>
      {posts.map((p, i) => {
        return (
          <PostWrapper key={i} mb="20px">
            <Img
              style={{
                width: '100%',
                marginRight: '20px',
                flex: 1,
              }}
              fluid={p.frontmatter.banner.childImageSharp.fluid}
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
