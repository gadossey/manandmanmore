const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const blogList = path.resolve(`./src/templates/blog-list.tsx`);
  const tagTemplate = path.resolve(`./src/templates/tags.tsx`);
  const categoryTemplate = path.resolve(`./src/templates/category.tsx`);
  const pdfPage = path.resolve(`./src/pages/pdfs.jsx`); // Path to your PDF page component

  const result = await graphql(
    `{
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                categories
                cover {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
        allFile(filter: { extension: { eq: "pdf" } }) {
          edges {
            node {
              absolutePath
              relativePath
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Fetch data from your Firebase or other data source
  

 
  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    const coverPublicURL = post.node.frontmatter.cover?.publicURL; // Handle potential missing cover field


   createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        tag: post.node.frontmatter.tags,
        category: post.node.frontmatter.categories,
        coverPublicURL,
      },
    });
  });

  // Create blog post list pages
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/page/1` : `/page/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create PDF pages
  const pdfFiles = result.data.allFile.edges;

  pdfFiles.forEach(({ node }) => {
    createPage({
      path: `/pdfs/${node.name}`,
      component: pdfPage,
      context: {
        relativePath: node.relativePath,
      },
    });
  });

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, (edge) => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });

  // Category pages:
  let categories = [];
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, (edge) => {
    if (_.get(edge, 'node.frontmatter.categories')) {
      categories = categories.concat(edge.node.frontmatter.categories);
    }
  });
  // Eliminate duplicate tags
  categories = _.uniq(categories);

  // Make tag pages
  categories.forEach((category) => {
    createPage({
      path: `/category/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });

  return null;
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug,
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value,
      });
    }
  }
};