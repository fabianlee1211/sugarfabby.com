import { SecondaryButton } from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
import BlogCard from '@components/modules/BlogCard/BlogCard';
import { useGroupItems } from '@hooks/useGroupItems';
import { AnimateSharedLayout, motion } from 'framer-motion';
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
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const PAGINATION_SIZE = 6;

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    {
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
                gatsbyImageData(
                  width: 728
                  quality: 90
                  layout: CONSTRAINED
                  aspectRatio: 1.77
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);

  const {
    items: posts,
    appendItems: appendPosts,
    hasMoreItems,
  } = useGroupItems(data.blog.nodes, PAGINATION_SIZE);

  return (
    <Container
      outerClassName="bg-background-dark"
      className="max-w-screen-xl py-10"
    >
      <AnimateSharedLayout>
        <motion.ul
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="visible"
          layout
        >
          {posts.map((p, i) => {
            return (
              <motion.li
                key={p.id}
                custom={i % PAGINATION_SIZE}
                layoutId={p.id}
                variants={item}
              >
                <BlogCard
                  blog={p.frontmatter}
                  link={p.fields.slug}
                  timeToRead={p.timeToRead}
                  className="p-4"
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimateSharedLayout>

      {hasMoreItems && (
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
