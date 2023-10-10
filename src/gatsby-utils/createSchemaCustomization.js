const {
  pageDefs,
  contentDefs,
  itServiceDefs,
  itSolutionDefs,
  caseStudyDefs,
  generalDefs,
  siteDefs,
  blogDefs,
  authorDefs,
  newsDefs,
  resourcesDefs,
  projectDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
  const { createTypes } = actions;

  const allTypeDefs = [
    pageDefs,
    contentDefs,
    itServiceDefs,
    itSolutionDefs,
    caseStudyDefs,
    generalDefs,
    siteDefs,
    blogDefs,
    authorDefs,
    newsDefs,
    resourcesDefs,
    projectDefs,
  ];

  createTypes(allTypeDefs);
};
