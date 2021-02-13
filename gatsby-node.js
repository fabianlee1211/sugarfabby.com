/* eslint-disable no-undef */
const path = require('path');

function createBlogPages({ posts, actions, blogPath }) {
  const { createPage } = actions;

  posts.forEach(({ node }, index) => {
    // Gets the previous and next blog post
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    // Sometimes fails to get the slug from fields
    const pagePath =
      (node.fields && node.fields.slug) ||
      `${blogPath}/${node.frontmatter.slug}`;

    createPage({
      path: pagePath,
      component: path.resolve(`./src/components/templates/Markdown/Post.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    });
  });
}

exports.createPages = ({ graphql, actions }) => {
  // Need to move MDX pages outside of pages folder to prevent creating duplicates
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          blog: allMdx(
            filter: {
              fileAbsolutePath: { regex: "//content/blog//" }
              frontmatter: { published: { eq: true } }
            }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(({ data, errors }) => {
        if (errors) {
          reject(errors);
          return;
        }

        const { edges } = data.blog;

        if (!edges.length) {
          reject('There are no posts');
          return;
        }

        // TODO: Create Category and Tag pages
        // const allTags = edges.map((e) => e.node.frontmatter.keywords).flat();
        // const allCategories = edges.map((e) => e.node.frontmatter.category);flat();
        // const tags = [...new Set(allTags)];
        // const categories = [...new Set(allCategories)];

        createBlogPages({ posts: edges, blogPath: '/blog', actions });
      }),
    );
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const parentNode = getNode(node.parent);
  const { createNodeField } = actions;

  if (
    node.internal.type === `Mdx` &&
    parentNode.sourceInstanceName === 'blog'
  ) {
    let slug = node.frontmatter.slug;
    // Windows system uses backlashes for directory names
    const parsedDirPath = __dirname.replace(/\\/g, '/');

    if (node.fileAbsolutePath.includes('content/blog/')) {
      slug = `/blog/${node.frontmatter.slug}`;
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });

    createNodeField({
      name: 'editLink',
      node,
      value: `https://github.com/fabianlee1211/sugarfabby.com/edit/master${node.fileAbsolutePath.replace(
        parsedDirPath,
        '',
      )}`,
    });
  }
};
