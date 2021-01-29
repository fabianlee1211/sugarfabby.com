import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Footer from '@components/modules/Footer/Footer';
import BlogSection from '@components/templates/BlogSection/BlogSection';
import React from 'react';

const BlogPage = () => {
  return (
    <>
      <SEO />
      <Container className="pt-24 pb-8 max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-2 text-primary">Blog</h2>
        <p className="text-lg">
          I mostly write about coding, productivity and life.
        </p>
      </Container>
      <BlogSection />
      <Footer />
    </>
  );
};

export default BlogPage;
