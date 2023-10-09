import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import AuthorDetails from "@components/blog/author-details";
import NavigationArea from "@components/news/navigation";
import AuthorMeta from "@components/blog/author-meta";
import BlogMeta from "@components/blog/blog-meta";
import Categories from "@components/blog/categories";
import Tags from "@components/blog/tags";
import BlogMedia from "@components/blog/blog-media";
import SocialShare from "@components/blog/social-share";
import { Container } from "@ui/wrapper";
import { NewsType } from "@utils/types";
import { MDXProvider } from "@mdx-js/react";
// Markdown Components

import { MarkdownComponents } from "@ui/markdown";

import {
  StyledSection,
  StyledBlogWrap,
  StyledTitle,
  StyledHeaderMeta,
  StyledContent,
  StyledFooter,
} from "./style";

const SingleNewsTemplate = ({ pageContext, location, data, children }) => {
  const globalContent = normalizedData(data?.allGeneral?.nodes || []);
  const newsData = data.news;
  return (
    <Layout location={location}>
      <Seo title={newsData.title} />
      <Header
        data={{
          ...globalContent["header"],
          ...globalContent["menu"],
          socials: data.site.siteMetadata.socials,
        }}
      />
      <main className="site-wrapper-reveal">
        <PageHeader
          pageContext={pageContext}
          location={location}
          title="News / Event"
        />
        <StyledSection>
          <Container>
            <BlogMedia
              format={newsData?.format}
              image={newsData?.image}
              video_link={newsData?.video_link}
              title={newsData?.title}
              quote_text={newsData?.quote_text}
              quote_author={newsData?.quote_author}
              mb="46px"
            />
            <StyledBlogWrap>
              <header className="blog-header">
                <Categories
                  textAlign="center"
                  mb="10px"
                  categories={newsData?.categories}
                />
                {newsData?.title && <StyledTitle>{newsData.title}</StyledTitle>}
                <StyledHeaderMeta>
                  {newsData?.author && (
                    <AuthorMeta
                      mt="10px"
                      mr="20px"
                      slug={newsData.author?.slug}
                      name={newsData.author?.name}
                      image={newsData.author?.image}
                    />
                  )}
                  {newsData?.postedAt && (
                    <BlogMeta
                      mt="10px"
                      mr="20px"
                      path={`/date/${newsData.postedAt.slug}`}
                      text={newsData.postedAt.date}
                      icon="fa fa-calendar-alt"
                    />
                  )}
                </StyledHeaderMeta>
              </header>
              <StyledContent className="markdown">
                <MDXProvider components={MarkdownComponents}>
                  {children || "No News Content Available Yet!"}
                </MDXProvider>
              </StyledContent>
              <StyledFooter>
                <Tags tags={newsData?.tags} mb={["10px"]} />
                <SocialShare
                  siteUrl={data.site.siteMetadata.siteUrl}
                  slug={`/${newsData?.slug}`}
                  title={newsData?.title}
                />
              </StyledFooter>
              <NavigationArea
                data={{
                  previous: pageContext.previous,
                  next: pageContext.next,
                }}
              />
            </StyledBlogWrap>
          </Container>
        </StyledSection>
      </main>
      <Footer data={{ ...data.site.siteMetadata }} />
    </Layout>
  );
};

export const postQuery = graphql`
  query ($slug: String!) {
    allGeneral {
      nodes {
        section
        ...HeaderOne
      }
    }
    site {
      ...Site
    }
    news(slug: { eq: $slug }) {
      ...NewsFull
    }
  }
`;

SingleNewsTemplate.propTypes = {
  location: PropTypes.shape({}),
  data: PropTypes.shape({
    allGeneral: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape({})),
        siteUrl: PropTypes.string,
      }),
    }),
    news: PropTypes.shape(NewsType),
  }),
  pageContext: PropTypes.shape({
    next: PropTypes.shape({}),
    previous: PropTypes.shape({}),
  }),
};

export default SingleNewsTemplate;
