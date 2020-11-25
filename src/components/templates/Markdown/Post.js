import Box from '@components/elements/Box/Box';
import Container from '@components/elements/Container/Container';
import Arrow from '@components/elements/Icon/Arrow';
import Link from '@components/elements/MDX/Link';
import SEO from '@components/elements/SEO/SEO';
import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import Footer from '@components/modules/Footer/Footer';
import { graphql, Link as NavLink } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import 'prism-theme-night-owl';
import React from 'react';
import styled from 'styled-components';

const PostContainer = styled(Container)`
  flex: 1 0 auto;
  > div {
    max-width: 768px;
    text-align: left;
  }
`;

const Description = styled(Text)`
  max-width: 90%;
`;

const Credit = styled(Text)`
  text-align: center;
  margin: 10px 0;
  color: gray;
`;

const PostCard = styled(Box)`
  background: var(--color-background-dark);
  padding: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  border-radius: 10px;
  flex: 1;

  &#next {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    margin-right: 15px;
    max-width: 357px;

    &#next {
      margin-left: auto;
    }
  }
`;

const PostLink = styled(NavLink)`
  color: var(--color-primary);

  :hover {
    text-decoration: underline;
  }
`;

const PostCardContainer = styled(Box)`
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Category = styled(Text)`
  color: var(--color-primary);
  padding: 0 10px;
  width: fit-content;
  background: rgba(79, 172, 254, 0.2);
  border-radius: 10px;
  margin-right: 10px;
`;

const ImageContainer = styled(Box)`
  > div {
    border-radius: 0;
    margin: 0 -20px;
  }

  @media screen and (min-width: 769px) {
    > div {
      border-radius: 10px;
    }
  }
`;

const Post = ({ data: { mdx }, pageContext }) => {
  const { next, prev } = pageContext;
  const { body, frontmatter, fields, timeToRead } = mdx;
  const { slug, editLink } = fields;
  const {
    title,
    description,
    banner,
    bannerCredit,
    bannerLink,
    date,
    category,
  } = frontmatter;

  const blogPostUrl = `https://sugarfabby.com${slug}`;

  return (
    <>
      <SEO
        frontmatter={{ ...frontmatter, slug }}
        metaImage={banner.childImageSharp.fluid.src}
        isBlogPost
      />
      <PostContainer isTopSection>
        <Box flexDirection="column" mb="30px">
          <Box>
            {category && <Category size="small">{category}</Category>}
            <Text
              size="small"
              style={{ color: 'var(--color-text-secondary)' }}
            >{`${date} • ${timeToRead} minute read`}</Text>
          </Box>
          <Heading size="h2" style={{ marginTop: '10px' }}>
            {title}
          </Heading>
          <Description size="large" fontWeight="200">
            {description}
          </Description>
        </Box>
        {banner && (
          <ImageContainer flexDirection="column" mb="30px">
            <Img fluid={banner.childImageSharp.fluid} alt="post-banner" />
            {bannerCredit && (
              <Credit size="small">
                Photo By&nbsp;
                <Link href={bannerLink}>{bannerCredit}</Link>
              </Credit>
            )}
          </ImageContainer>
        )}
        <MDXRenderer>{body}</MDXRenderer>

        <Box alignItems="flex-end" flexDirection="column" mt="80px" mb="30px">
          <Text fontWeight="bold">Thanks For Reading</Text>
          <Box mt="5px">
            <Text style={{ margin: 0, textAlign: 'right' }}>
              <Link
                href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                  blogPostUrl,
                )}`}
              >
                Discuss on Twitter
              </Link>
              <span style={{ margin: '0 10px' }}>{` • `}</span>
              <Link href={editLink}>Edit Post on GitHub</Link>
            </Text>
          </Box>
        </Box>

        <PostCardContainer justifyContent="space-between">
          {prev && (
            <PostCard id="prev">
              <Box alignItems="center">
                <Arrow type="left" />
                <Text>Previous</Text>
              </Box>
              <PostLink style={{ fontWeight: 'bold' }} to={prev.fields.slug}>
                {prev.frontmatter.title}
              </PostLink>
            </PostCard>
          )}
          {next && (
            <PostCard id="next">
              <Box alignItems="center" alignSelf="flex-end">
                <Text>Next</Text>
                <Arrow />
              </Box>
              <PostLink
                style={{ fontWeight: 'bold', textAlign: 'right' }}
                to={next.fields.slug}
              >
                {next.frontmatter.title}
              </PostLink>
            </PostCard>
          )}
        </PostCardContainer>
      </PostContainer>
      <Footer />
    </>
  );
};

// id comes from the context when we create the pages
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      fields {
        slug
        editLink
      }
      frontmatter {
        title
        date
        description
        author
        bannerCredit
        bannerLink
        category
        banner {
          childImageSharp {
            fluid(maxWidth: 768, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;

export default Post;
