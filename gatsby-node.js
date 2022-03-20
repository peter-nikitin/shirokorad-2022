const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`${__dirname}/src/components/detail/Detail.tsx`);
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
          body
          frontmatter {
            title
            stylist
            photo
          }
        }
      }
    }
  `);
  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${node.slug}`,
      component: blogPostTemplate,
      context: {
        title: node.title,
        slug: node.slug,
        photos: `${node.slug}photos/*`,
      },
    });
  });
};
