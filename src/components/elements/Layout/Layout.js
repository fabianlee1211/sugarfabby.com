import Video from '@components/elements/Video/Video';
import Navbar from '@components/modules/Navbar/Navbar';
import ThemeProvider from '@lib/theme/ThemeProvider';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import mdxComponents from '../MDX/Mdx';

const customComponents = { Video };

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <MDXProvider components={{ ...mdxComponents, ...customComponents }}>
          {children}
        </MDXProvider>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
