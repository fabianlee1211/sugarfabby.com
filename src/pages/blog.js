import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import Footer from '@components/modules/Footer/Footer';
import BlogSection from '@components/templates/BlogSection/BlogSection';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  > div {
    padding: 70px 20px 40px;
    text-align: left;
    max-width: 1120px;
  }
`;

const BlogPage = () => {
  return (
    <>
      <SEO />
      <StyledContainer>
        <Heading
          size="h2"
          style={{ marginBottom: '10px', color: 'var(--color-primary)' }}
        >
          Blog
        </Heading>
        <Text>I mostly write about coding, productivity and life.</Text>
      </StyledContainer>
      <BlogSection />
      <Footer />
    </>
  );
};

export default BlogPage;
