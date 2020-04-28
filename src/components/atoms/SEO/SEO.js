import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const MyHelmet = ({
  siteMetadata: seo,
  contentfulAsset,
  postData,
  // metaImage,
  isBlogPost,
  frontmatter: postMeta = (postData &&
    postData.childMarkdownRemark.frontmatter) ||
    {},
  title = postMeta.title || seo.title,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
  image = contentfulAsset.file.url,
  url = postMeta.slug ? `${seo.siteUrl}${postMeta.slug}` : seo.siteUrl,
  // datePublished = isBlogPost ? postMeta.datePublished : false,
}) => {
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={url}></link>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={'@fabiannnlee'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

const SEO = (props) => {
  const {
    site: { siteMetadata },
    contentfulAsset,
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          blogUrl
        }
      }
      contentfulAsset(title: { eq: "fabian-portfolio-open-graph" }) {
        file {
          url
        }
      }
    }
  `);

  return <MyHelmet {...{ siteMetadata, contentfulAsset }} {...props} />;
};

export default SEO;