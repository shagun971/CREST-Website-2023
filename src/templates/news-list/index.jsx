import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import { Container, Row, Col } from "@ui/wrapper";
import {
    PopularTagsWidget,
    AdWidget,
} from "@components/widgets";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import NewsArea from "@containers/news-area/news-in-list";
import Pagination from "@components/news/pagination";
import { StyledSection, StyledSidebar } from "./style";

const NewsListTemplate = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);
    const { currentPage, numberOfPages } = pageContext;
    console.log(`${currentPage} vs ${numberOfPages} `);
    return (
        <Layout location={location}>
            <Seo
                title={`News: ${
                    currentPage !== 0 ? `Page ${currentPage}` : ""
                }`}
            />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title={`Latest News & Events`}
                />
                <StyledSection>
                    <Container>
                        <Row>
                            <Col
                                lg={{ span: 4, order: 1 }}
                                xs={{ span: 12, order: 2 }}
                            >
                                <StyledSidebar>
                                    <AdWidget
                                        data={content["ad-section"]}
                                        mb="47px"
                                    />
                                    <PopularTagsWidget
                                        data={{
                                            ...content["tag-section"],
                                            tags: data.tags.nodes,
                                        }}
                                    />
                                </StyledSidebar>
                            </Col>
                            <Col
                                lg={{ span: 8, order: 2 }}
                                xs={{ span: 12, order: 1 }}
                            >
                                <NewsArea
                                    data={{
                                        ...content["news-section"],
                                        news: data.news.nodes,
                                        siteUrl: data.site.siteMetadata.siteUrl,
                                    }}
                                />
                                <Pagination
                                    mt="40px"
                                    rootPage="/latest-news"
                                    currentPage={currentPage}
                                    numberOfPages={numberOfPages}
                                />
                            </Col>
                        </Row>
                    </Container>
                </StyledSection>
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query NewsListTemplateQuery($skip: Int!, $limit: Int!) {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "news" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
        news: allNews(
            sort: { fields: postedAt___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            totalCount
            nodes {
                ...NewsListItem
            }
        }
        tags: allNews {
            nodes {
                tags {
                    title
                    slug
                }
            }
        }
    }
`;
NewsListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        currentPage: PropTypes.number,
        numberOfPages: PropTypes.number,
    }),
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                contact: PropTypes.shape({}),
                siteUrl: PropTypes.string,
            }),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        news: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
            totalCount: PropTypes.number,
        }),
        tags: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default NewsListTemplate;
