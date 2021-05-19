// ***************** TEMPLATE MODEL FOR GENERATING NEW PAGES USING SLUGS ***************

// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//     const {  createPage } = actions
//     const blogTemplate = path.resolve('./src/Components/Blog/Article.js')
//     const res = await graphql(`
//             query {
//                 allHashNodePost {
//                     edges {
//                         node {
//                             slug
//                         }
//                     }
//                 }
//             }
//         `
//     )

//     res.data.allHashNodePost.edges.forEach((edge) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.slug}`,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}