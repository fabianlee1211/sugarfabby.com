import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-darkMode-lighter: #cee7fe;
    --color-darkMode-light: #6d93b3;
    --color-darkMode: #0e182a;
    --color-darkMode-dark: #0B101A;
    --color-darkMode-darker: #000000;

    --color-primary-lighter: #cee7fe;
    --color-primary-light: #82c4fe;
    --color-primary: #4facfe;
    --color-primary-dark: #1986e6;
    --color-primary-darker: #1267b3;

    --color-white: #ffffff;
    --color-grey-light: #f5f5f5;
    --color-grey-lighter: #f7fafc;
    --color-grey: #dcdcdc;
    --color-grey-dark: #a7a7a7;
    --color-grey-darker: #6b6b6b;


    --color-background: var(--color-white);
    --color-background-dark: var(--color-grey-light);
    --color-background-footer: var(--color-primary);
    --color-background-code: var(--color-darkMode-dark);
    --color-text: var(--color-darkMode);
    --color-text-footer: var(--color-white);
    --color-text-secondary: var(--color-grey-darker);
    --color-text-disabled: var(--color-white);
    --color-hover: var(--color-primary-light);
    --color-active: var(--color-primary-dark);
    --color-border: var(--color-grey);
    --color-switch: #f0ba2a;

    --box-shadow: rgba(0, 0, 0, 0.016) 0px 0.8px 2.2px -2px, rgba(0, 0, 0, 0.02) 0px 1.9px 5.3px -2px, rgba(0, 0, 0, 0.024) 0px 3.6px 10px -2px, rgba(0, 0, 0, 0.03) 0px 6.5px 17.9px -2px;
    --color-navbar-background: rgba(255, 255, 255, 0.9) none repeat scroll 0% 0%;
    --base-font-size: 18px;
  }

  [data-theme='dark'] {
    --color-background: var(--color-darkMode);
    --color-background-dark: var(--color-darkMode-dark);
    --color-background-footer: var(--color-darkMode-darker);
    --color-text: var(--color-grey-lighter);
    --color-text-footer: var(--color-primary-lighter);
    --color-text-secondary: var(--color-darkMode-light);
    --color-text-disabled: var(--color-darkMode-light);
    --color-hover: var(--color-primary-light);
    --color-active: var(--color-primary-dark);
    --color-border: rgba(255, 255, 255, 0.05);
    --color-navbar-background: rgba(14, 24, 42, 0.9) none repeat scroll 0% 0%;

    --box-shadow: rgba(0, 0, 0, 0.082) 0px 0.8px 2.2px -2px, rgba(0, 0, 0, 0.12) 0px 1.9px 5.3px -2px, rgba(0, 0, 0, 0.15) 0px 3.6px 10px -2px, rgba(0, 0, 0, 0.18) 0px 6.5px 17.9px -2px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: var(--base-font-size);
    line-height: 1.5em;
    transition: background 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  html,
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
    background: var(--color-background);
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  h1:hover .anchor svg, h2:hover .anchor svg, h3:hover .anchor svg, h4:hover .anchor svg, h5:hover .anchor svg, h6:hover .anchor svg, h1 .anchor:focus svg, h2 .anchor:focus svg, h3 .anchor:focus svg, h4 .anchor:focus svg, h5 .anchor:focus svg, h6 .anchor:focus svg {
    opacity: 1
  }

  .anchor svg {
    position: absolute;
    left: -24px;
    height: 100%;
    fill: var(--color-primary);
    opacity: 0;
    transition: all 0.2s ease
  }

  pre, code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    overflow-wrap: break-word;
  }

  /* Adjust code highlight line numbers position, depending on the containers' padding */
  .gatsby-highlight .line-numbers-rows {
    padding: 20px 0 20px 1em;
    border-right: none;

    span::before {
      color: white;
      opacity: 0.2;
      font-size: 16px;
    }
  }
`;

export default GlobalStyles;
