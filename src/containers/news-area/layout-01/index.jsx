import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import RecentNews from "@components/news/recent-one-news";
import { SectionTitleType, BlogType } from "@utils/types";
import { BlogWrap, BlogList, BlogListItem } from "./style";

const NewsArea = ({ data }) => {
  return (
    <BlogWrap>
      <Container>
        {data?.section_title && (
          <SectionTitle
            mb={["47px", null, "60px"]}
            title={data.section_title?.title}
            subtitle={data.section_title?.subtitle}
          />
        )}

          {data?.recentNews && (
            <BlogList>
                <Row>
              {data.recentNews.map((news) => (
                <Col lg={6}>
                  <BlogListItem key={news.slug}>
                    <RecentNews
                      format={news.format}
                      excerpt={news.excerpt}
                      title={news.title}
                      slug={news.slug}
                      postedAt={news.postedAt}
                      author={news.author}
                      image={news.image}
                      video_link={news.video_link}
                    />
                  </BlogListItem>
                </Col>
              ))}
              </Row>
            </BlogList>
          )}
      </Container>
    </BlogWrap>
  );
};

NewsArea.propTypes = {
  data: PropTypes.shape({
    section_title: PropTypes.shape(SectionTitleType),
    recentNews: PropTypes.arrayOf(PropTypes.shape(BlogType)),
  }),
};

export default NewsArea;
