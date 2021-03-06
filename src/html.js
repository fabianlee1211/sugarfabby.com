import avatarDark from '@assets/images/avatar-dark.svg';
import avatar from '@assets/images/avatar.svg';
import PropTypes from 'prop-types';
import * as React from 'react';

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:200,300,400,500,600,700&display=swap"
          media="all"
        ></link>
        <link rel="preload" as="image" href={avatar} />
        <link rel="preload" as="image" href={avatarDark} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.documentElement.setAttribute('data-theme', newTheme);
                  document.documentElement.setAttribute('class', newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                setTheme(preferredTheme || 'dark');
              })();
            `,
          }}
        />
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
