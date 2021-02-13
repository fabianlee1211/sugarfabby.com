import { SecondaryButton } from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
import { useGroupedPosts } from '@hooks/useGroupedPosts';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { PostItem } from '../SummarySection/SummaryItems';

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
    <Container
      outerClassName="bg-background-dark"
      className="max-w-screen-xl py-10"
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => {
          return (
            <div className="bg-background rounded-lg shadow-xl" key={i}>
              <Img
                className="rounded-t-lg"
                objectFit="cover"
                objectPosition="center"
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
                className="p-4"
              />
            </div>
          );
        })}
      </div>
      {hasMorePosts && (
        <div className="flex justify-center pt-8">
          <SecondaryButton
            alt="Load more posts"
            onClick={appendPosts}
            className="w-28"
          >
            Load More
          </SecondaryButton>
        </div>
      )}
    </Container>
  );
};

export default BlogSection;
