import Seo from "@components/seo";
import TimelineArea from "@containers/elements/timeline";
import PageHeader from "@containers/page-header/layout-02";
import Layout from "@layout";
import Footer from "@layout/footer/layout-01";
import Header from "@layout/header/layout-01";
import { normalizedData } from "@utils";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";

const ActivitiesPage = ({ pageContext, location, data }) => {
  const globalContent = normalizedData(data?.allGeneral.nodes || []);
  return (
    <Layout location={location}>
      <Seo title="Activities" />
      <Header
        data={{
          ...globalContent["header"],
          ...globalContent["menu"],
        }}
      />
      <PageHeader
        pageContext={pageContext}
        location={location}
        title="Activities"
      />
      <main className="site-wrapper-reveal">
        {data?.activity?.content ? (
          <TimelineArea content={data.activity.content} />
        ) : (
          <h3>Activities TBA...</h3>
        )}
      </main>
      <Footer data={{ ...data.site.siteMetadata }} />
    </Layout>
  );
};

export const query = graphql`
  query ActivitiesPageQuery {
    allGeneral {
      nodes {
        section
        ...HeaderOne
      }
    }
    site {
      ...Site
    }
    activity {
      ...Activity
    }
  }
`;

ActivitiesPage.propTypes = {
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
    activity: PropTypes.shape({}),
  }),
};

export default ActivitiesPage;
