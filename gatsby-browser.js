/* eslint-disable react/display-name */
/* eslint-disable no-undef */
const React = require('react');
const Layout = require('./src/components/elements/Layout/Layout').default;
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('./src/styles/global.css');

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
