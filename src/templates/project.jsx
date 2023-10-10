import Seo from "@components/seo";
import PageHeader from "@containers/page-header/layout-02";
import Layout from "@layout";
import Footer from "@layout/footer/layout-01";
import Header from "@layout/header/layout-01";
import { MDXProvider } from "@mdx-js/react";
import { normalizedData } from "@utils";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import styled, { device, themeGet } from "@styled";
import { MarkdownComponents } from "@ui/markdown";

const ProjectPage = ({ pageContext, location, data, children }) => {
  console.log(pageContext);
  const { title, tags, author, postedAt, type } = pageContext;
  const globalContent = normalizedData(data?.allGeneral.nodes || []);
  return (
    <Layout location={location}>
      <Seo title={title} />
      <Header
        data={{
          ...globalContent["header"],
          ...globalContent["menu"],
        }}
      />
      <PageHeader pageContext={pageContext} location={location} title={title} />
      <main className="site-wrapper-reveal">
        <StyledSection>
          <StyledContentWrap>
            <StyledContent className="markdown">
              {children ? (
                <MDXProvider components={MarkdownComponents}>
                  {children}
                </MDXProvider>
              ) : (
                <p>Content is TBA.</p>
              )}
            </StyledContent>
          </StyledContentWrap>
        </StyledSection>
      </main>
      <Footer data={{ ...data.site.siteMetadata }} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectPageQuery {
    allGeneral {
      nodes {
        section
        ...HeaderOne
      }
    }
    site {
      ...Site
    }
    # allProject(id: { eq: $id }) {
    #   ...ProjectFull
    # }
  }
`;

ProjectPage.propTypes = {
  pageContext: PropTypes.shape({}),
  location: PropTypes.shape({}),
  data: PropTypes.shape({
    allGeneral: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contact: PropTypes.shape({}),
      }),
    }),
    // projects: PropTypes.shape(ResourcesType),
  }),
};

const StyledSection = styled.section`
  padding-block: 8px;

  ${device.medium} {
    padding-block: 16px;
  }
  ${device.large} {
    padding-block: 32px;
  }
  ${device.xlarge} {
    padding-block: 48px;
  }
`;

export const StyledContentWrap = styled.div`
  margin-inline: auto;
  max-width: 960px;
`;

const StyledContent = styled.div`
  margin-block-start: 15px;
  blockquote {
    margin: 54px 65px 44px 70px;
    padding: 0 0 0 20px;
    font-size: 20px;
    line-height: 1.78;
    font-weight: 600;
    border-inline-start: 4px solid ${themeGet("colors.secondary")};
    position: relative;
    color: ${themeGet("colors.heading")};
    @media ${device.small} {
      font-size: 16px;
      margin: 50px 70px 44px;
    }
    @media ${device.xsmall} {
      margin: 40px 30px;
    }
  }

  .icon::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }

  .twitter::before {
    font-family: "Font Awesome 5 Brands";
    content: "\f099";
    margin-right: 4px;
  }

  .linkedin::before {
    font-family: "Font Awesome 5 Brands";
    content: "\f08c";
    margin-right: 4px;
  }
`;

export default ProjectPage;
