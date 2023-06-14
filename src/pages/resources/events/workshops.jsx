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

import ImageOne from "@data/images/workshops/workshop-image-01.jpg";
import ImageTwo from "@data/images/workshops/workshop-image-02.jpg";
import ImageThree from "@data/images/workshops/workshop-image-03.jpg";
import ImageFour from "@data/images/workshops/workshop-image-04.jpg";
const workshopData = [
  {
    id: 1,
    year: "2022",
    images: [{ src: ImageOne }],
    title:
      "May, 10th - CREST and SCS lab (Sydney) Workshop to share ideas and discuss potential collaboration",
    hosts: {
      "host 1": "http://host.org",
      "host 2": "host 3",
    },
    description:
      "Workshop description for the workshop at May, 10th - CREST and SCS lab (Sydney) Workshop to share ideas and discuss potential collaboration, this is a really informative workshop which have atrracted a large amount of participants.",
    socialNetworks: {
      twitter: "http://twitter.com",
      linkedin: "",
      youtube: "https://www.youtube.com/watch?v=BX4o_G76xEc",
    },
  },
  {
    id: 2,
    year: "2022",
    images: [{ src: ImageFour }],
    title:
      "May, 6th - The Art and Practice of Data Science Pipelines: A Comprehensive Study of Data Science Pipelines In Theory, In-The-Small, and In-The-Large.",
    description: "Workshop description...",
  },
  {
    id: 3,
    year: "2022",
    images: [{ src: ImageThree }],
    title: "Apr, 1st - Edge Intelligence Challenges in Next-Generation Network",
    description: "Workshop description...",
  },
  {
    id: 4,
    year: "2022",
    images: [{ src: ImageOne }],
    title: "Feb, 9th - Effective time management and combating procastination",
    description: "Workshop description...",
  },
];

const WorkshopPage = ({ pageContext, location, data }) => {
    const globalContent = normalizedData(data?.allGeneral.nodes || []);
  return (
    <Layout location={location}>
      <Seo title='Workshops' />
      <Header
        data={{
          ...globalContent["header"],
          ...globalContent["menu"],
        }}
      />
      <PageHeader
        pageContext={pageContext}
        location={location}
        title='Workshops'
      />
      <main className='site-wrapper-reveal'>
        <TimelineArea content={workshopData} />
      </main>
      <Footer data={{ ...data.site.siteMetadata }} />
    </Layout>
  );
};

export const query = graphql`
  query WorkshopPageQuery {
    allGeneral {
      nodes {
        section
        ...HeaderOne
      }
    }
    site {
      ...Site
    }
  }
`;

WorkshopPage.propTypes = {
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
  }),
};

export default WorkshopPage;
