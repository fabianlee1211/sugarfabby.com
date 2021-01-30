import avatarDark from '@assets/images/avatar-dark.svg';
import avatar from '@assets/images/avatar.svg';
import Container from '@components/elements/Container/Container';
import { useTheme } from '@lib/theme/ThemeProvider';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          email
          description
        }
      }
    }
  `);
  const { mode } = useTheme();
  const { author, email, description } = data.site.siteMetadata;
  return (
    <Container className="pt-28 max-w-screen-xl">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="flex items-center flex-col max-w-xs space-y-4 md:items-start">
          <h1 className="text-4xl text-center text-black dark:text-white font-bold md:text-left md:text-5xl">
            {author}
          </h1>
          <p className="text-black text-center dark:text-white md:text-left">
            {description}
          </p>
          <a href={`mailto:${email}`} rel="nofollow noopener noreferrer">
            <button className="w-32 py-2 font-medium rounded-md bg-primary text-white hover:bg-primary-dark">
              Say Hello
            </button>
          </a>
        </div>
        <div className="h-60 mt-8 md:mt-0">
          <img
            className="object-fill h-60 w-full"
            src={mode === 'dark' ? avatarDark : avatar}
          />
        </div>
      </div>
    </Container>
  );
};

export default IntroSection;
