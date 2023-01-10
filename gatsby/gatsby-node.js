const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // 1. Get a template for this page
  // 2. Query all artists
  const result = await graphql(`
   {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
        
      }
    }
  `)

    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

  // 3. Loop over each artist and create a page for each artist
  const workTemplate = path.resolve(`src/templates/Work.js`)
  result.data.allMdx.edges.forEach(({node}) => {
    const pathWork = node.frontmatter.slug
      createPage({
          // url forths new page
          path: `/work${pathWork}`,
          component: `${workTemplate}?__contentFilePath=${node.internal.contentFilePath}`, // highlight-line          
          context: {
            language: 'en',
            slug: pathWork,
            pathSlug: pathWork,
            id: node.id
        }
      })
  });
}