import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Footer from '@components/modules/Footer/Footer';
import * as React from 'react';

const MarkdownPage = ({ children, pageContext }) => {
  return (
    <>
      <SEO frontmatter={pageContext.frontmatter} />
      <Container className="max-w-screen-md text-left pt-24 pb-12" isBlog>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MarkdownPage;
