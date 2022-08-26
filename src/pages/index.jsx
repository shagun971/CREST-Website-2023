import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-03";
import PartnerArea from "@containers/partner/layout-01";
import ITSolutionArea from "@containers/it-solution/layout-01";
import AboutServiceWrap from "@containers/about-service-wrap";
import AboutArea from "@containers/about/layout-01";
import ITServiceArea from "@containers/it-service/layout-01";
import FunfactArea from "@containers/funfact/layout-01";
import CtaArea from "@containers/cta/layout-01";
import CaseStudyArea from "@containers/case-study/layout-01";
import TestimonialArea from "@containers/testimonial/layout-01";
import BlogArea from "@containers/blog/layout-02";
import TwitterArea from "@containers/blog/twitter";
import ContactArea from "@containers/contact/layout-01";
import HomeSlider from "../containers/home-slider/layout-01";
import OurWorkSection from "../containers/our-works/layout-01";
import JoinUsArea from "../containers/join-us/layout-01";
import NewsArea from "../containers/news-area/layout-01";

const InfotechnoPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Centre for Research on Engineering Software Technologies" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                {/* <HeroArea data={content["hero-section"]} /> */}
                <HomeSlider />
                <PartnerArea data={content["partner-section"]} />
                {/* <AboutServiceWrap>
                    <AboutArea data={content["about-section"]} />
                    <ITServiceArea
                        data={{
                            ...content["service-section"],
                            items: data.allItService.nodes,
                        }}
                    />
                </AboutServiceWrap> */}
                {/* <FunfactArea data={content["funfact-section"]} /> */}
                {/* <CtaArea data={content["cta-section"]} /> */}
                {/* <CaseStudyArea
                    data={{
                        ...content["case-study-section"],
                        items: data.allCaseStudy.nodes,
                    }}
                /> */}
                {/* <TestimonialArea data={content["testimonial-section"]} /> */}
                <OurWorkSection />
                <NewsArea
                    data={{
                        ...content["news-section"],
                        recentNews: data.recentNews.nodes,
                    }}
                />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        featuredBlog: data.featuredBlogs.nodes[0],
                        recentBlogs: data.recentBlogs.nodes,
                    }}
                />
                <TwitterArea />
                {/* <ITSolutionArea
                    data={{
                        ...content["feature-section"],
                        items: data.allItSolution.nodes,
                    }}
                /> */}
                <JoinUsArea data={content["join-us-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query infotechnoPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "infotechno" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
        allItSolution(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
            limit: 3
        ) {
            nodes {
                ...ItSolutionTwo
            }
        }
        allItService(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: false } }
        ) {
            nodes {
                ...ItServiceThree
            }
        }
        allCaseStudy(filter: { is_featured: { eq: true } }, limit: 4) {
            nodes {
                ...CaseStudyOne
            }
        }
        featuredBlogs: allArticle(
            filter: { is_featured: {eq :true} }
            sort: { fields: postedAt___date, order: DESC }
            limit: 1
        ) {
            nodes {
                ...BlogThree
            }
        }
        recentBlogs: allArticle(
            sort: { fields: postedAt___date, order: DESC }
            limit: 3
        ) {
            nodes {
                ...BlogFour
            }
        }
        recentNews: allNews(
            sort: {fields: postedAt___date, order: DESC}
            limit: 4
        ) {
            nodes {
              ...NewsOne
            }
        }
    }
`;

InfotechnoPage.propTypes = {
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
            }),
        }),
        allItSolution: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allItService: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allCaseStudy: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        featuredBlogs: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        recentBlogs: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        recentNews: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        })
    }),
};

export default InfotechnoPage;
