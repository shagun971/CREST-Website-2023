const path = require("path");
const get = require("lodash.get");

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const servicePage = path.resolve("./src/templates/it-service/index.jsx");
  const solutionPage = path.resolve("./src/templates/it-solution/index.jsx");
  const caseStudyPage = path.resolve("./src/templates/case-study/index.jsx");
  const singleBlogPage = path.resolve("./src/templates/single-blog/index.jsx");
  const singleNewsPage = path.resolve("./src/templates/single-news/index.jsx");
  const blogList = path.resolve("./src/templates/blog-list/index.jsx");
  const newsList = path.resolve("./src/templates/news-list/index.jsx");
  const tagPage = path.resolve("./src/templates/blog-tag/index.jsx");
  const categoryPage = path.resolve("./src/templates/blog-category/index.jsx");
  const authorPage = path.resolve("./src/templates/blog-author/index.jsx");
  const datePage = path.resolve("./src/templates/blog-date/index.jsx");
  const searchPage = path.resolve("./src/templates/search/index.jsx");

  const result = await graphql(`
    {
      allItService {
        nodes {
          slug
        }
      }
      allItSolution {
        nodes {
          slug
        }
      }
      allCaseStudy {
        edges {
          node {
            slug
          }
          next {
            title
            slug
            featured_image {
              src {
                childImageSharp {
                  gatsbyImageData(
                    width: 120
                    height: 80
                    quality: 100
                    layout: FIXED
                  )
                }
              }
            }
          }
          previous {
            title
            slug
            featured_image {
              src {
                childImageSharp {
                  gatsbyImageData(
                    width: 120
                    height: 80
                    quality: 100
                    layout: FIXED
                  )
                }
              }
            }
          }
        }
      }
      allArticle {
        edges {
          node {
            slug
            categories {
              slug
            }
            tags {
              slug
            }
            author {
              slug
            }
            postedAt {
              date(formatString: "LL")
              slug
            }
            type
            internal {
              contentFilePath
            }
          }
          next {
            title
            slug
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: TRACED_SVG
                    width: 650
                    height: 120
                  )
                }
              }
            }
            type
            internal {
              contentFilePath
            }
          }
          previous {
            title
            slug
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: TRACED_SVG
                    width: 650
                    height: 120
                  )
                }
              }
            }
            type
            internal {
              contentFilePath
            }
          }
        }
      }
      allNews {
        edges {
          node {
            slug
            categories {
              slug
            }
            tags {
              slug
            }
            author {
              slug
            }
            postedAt {
              date(formatString: "LL")
              slug
            }
            type
            internal {
              contentFilePath
            }
          }
          next {
            title
            slug
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: TRACED_SVG
                    width: 650
                    height: 120
                  )
                }
              }
            }
            type
            internal {
              contentFilePath
            }
          }
          previous {
            title
            slug
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: TRACED_SVG
                    width: 650
                    height: 120
                  )
                }
              }
            }
            type
            internal {
              contentFilePath
            }
          }
        }
      }
      allResources {
        nodes {
          id
          internal {
            contentFilePath
          }
        }
      }
      allProject(sort: { postedAt: { date: DESC } }) {
        edges {
          node {
            slug
            tags {
              slug
            }
            author {
              slug
            }
            postedAt {
              date(formatString: "LL")
              slug
            }
            type
            internal {
              contentFilePath
            }
          }
          next {
            title
            slug
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: TRACED_SVG
                    width: 650
                    height: 120
                  )
                }
              }
            }
            type
            internal {
              contentFilePath
            }
          }
          previous {
            title
            slug
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: TRACED_SVG
                    width: 650
                    height: 120
                  )
                }
              }
            }
            type
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  // Create Single IT Service page

  // const itservices = result.data.allItService.nodes;
  // itservices.forEach((node) => {
  //     createPage({
  //         path: `it-service/${node.slug}`,
  //         component: servicePage,
  //         context: {
  //             slug: node.slug,
  //         },
  //     });
  // });

  // Create Single IT Solution page
  const itsolutions = result.data.allItSolution.nodes;
  itsolutions.forEach((node) => {
    createPage({
      path: `it-solution/${node.slug}`,
      component: solutionPage,
      context: {
        slug: node.slug,
      },
    });
  });

  // Create Single Case Study Page

  const caseStudies = result.data.allCaseStudy.edges;
  caseStudies.forEach(({ node, next, previous }) => {
    createPage({
      path: `case-study/${node.slug}`,
      component: caseStudyPage,
      context: {
        slug: node.slug,
        next,
        previous,
      },
    });
  });

  // Create Single Blog Page

  const blogs = result.data.allArticle.edges;
  blogs.forEach(({ node, next, previous }) => {
    createPage({
      path: node.slug,
      component: `${singleBlogPage}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.slug,
        next,
        previous,
      },
    });
  });

  // Create Blog List Page
  // Pagination

  const postsPerPage = 6;
  const numberOfBlogPages = Math.ceil(blogs.length / postsPerPage);

  Array.from({ length: numberOfBlogPages }).forEach((_, index) => {
    const isFirstPage = index === 0;
    const currentPage = index + 1;
    // if (isFirstPage) return;
    createPage({
      path: isFirstPage ? "blogs" : `blogs/page/${currentPage}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: currentPage,
        numberOfPages: numberOfBlogPages,
      },
    });
  });

  // single news page
  const news = result.data.allNews.edges;
  news.forEach(({ node, next, previous }) => {
    createPage({
      path: node.slug,
      component: `${singleNewsPage}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.slug,
        next,
        previous,
      },
    });
  });

  // Create News List Page
  const newsPerPage = 5;
  const numberOfNewsPage = Math.ceil(news.length / newsPerPage);

  Array.from({ length: numberOfNewsPage }).forEach((_, index) => {
    const isFirstPage = index === 0;
    const currentPage = index + 1;
    // if (isFirstPage) return;
    createPage({
      path: isFirstPage ? "latest-news" : `latest-news/page/${currentPage}`,
      component: newsList,
      context: {
        limit: newsPerPage,
        skip: index * newsPerPage,
        currentPage: currentPage,
        numberOfPages: numberOfNewsPage,
      },
    });
  });

  // Create Project Page
  const projects = result.data.allProject.edges;
  const oneProjectTemplate = path.resolve("./src/templates/project.jsx");

  projects.forEach(({ node, next, previous }) => {
    console.log(
      "🚀 ~ file: createPages.js:399 ~ projects.forEach ~ node:",
      node
    );
    createPage({
      path: node.slug,
      component: `${oneProjectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        title: node.title,
        tags: node.tags,
        author: node.author,
        postedAt: node.postedAt,
        type: node.type,
        slug: node.slug,
        next,
        previous,
      },
    });
  });

  // Create Tags Page

  let tags = [];
  let categories = [];
  let authors = [];
  let dates = [];
  let dateSlugs = [];
  blogs.forEach((edge) => {
    if (get(edge, "node.tags")) {
      tags = tags.concat(edge.node.tags.map((tag) => tag.slug));
    }
    if (get(edge, "node.categories")) {
      categories = categories.concat(
        edge.node.categories.map((cat) => cat.slug)
      );
    }
    if (get(edge, "node.author")) {
      authors = authors.concat(edge.node.author.slug);
    }
    if (get(edge, "node.postedAt")) {
      dates = dates.concat(edge.node.postedAt.date);
      dateSlugs = dateSlugs.concat(edge.node.postedAt.slug);
    }
  });
  news.forEach((edge) => {
    if (get(edge, "node.tags")) {
      tags = tags.concat(edge.node.tags.map((tag) => tag.slug));
    }
    if (get(edge, "node.categories")) {
      categories = categories.concat(
        edge.node.categories.map((cat) => cat.slug)
      );
    }
    if (get(edge, "node.author")) {
      authors = authors.concat(edge.node.author.slug);
    }
    if (get(edge, "node.postedAt")) {
      dates = dates.concat(edge.node.postedAt.date);
      dateSlugs = dateSlugs.concat(edge.node.postedAt.slug);
    }
  });

  tags = [...new Set(tags)];
  tags.forEach((tag) => {
    createPage({
      path: `/tag/${tag}`,
      component: tagPage,
      context: {
        slug: tag,
      },
    });
  });

  // Create Categories Page

  categories = [...new Set(categories)];
  categories.forEach((category) => {
    createPage({
      path: `/category/${category}`,
      component: categoryPage,
      context: {
        slug: category,
      },
    });
  });

  // Create Authors Page

  authors = [...new Set(authors)];
  authors.forEach((author) => {
    createPage({
      path: `/profile/${author}`,
      component: authorPage,
      context: {
        slug: author,
      },
    });
  });

  // Create Date Page
  dates = [...new Set(dates)];
  dateSlugs = [...new Set(dateSlugs)];
  dateSlugs.forEach((dateSlug, i) => {
    createPage({
      path: `/date/${dateSlug}`,
      component: datePage,
      context: {
        date: dates[i],
        slug: dateSlug,
      },
    });
  });

  // Create Search Page
  createPage({
    path: "/search",
    component: searchPage,
  });

  const resources = result.data.allResources.nodes;
  const resourceTemplate = path.resolve("./src/templates/resource.jsx");
  resources.map((resource) => {
    createPage({
      path: `/resources/${resource.id}`,
      component: `${resourceTemplate}?__contentFilePath=${resource.internal.contentFilePath}`,
      context: {
        id: resource.id,
        slug: resource.id,
      },
    });
  });
};
