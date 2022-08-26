import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import FeaturedBlog from "@components/blog/layout-03";
import RecentBlog from "@components/blog/layout-04";
import { SectionTitleType, BlogType } from "@utils/types";
import {
  BlogWrap,
  BlogList,
  BlogListItem,
  BlogWrapper,
  LeftBox,
  RecentBlogWrap,
  FeaturedBlogWrap,
} from "./style";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const BlogArea = ({ data }) => {
  return (
    <BlogWrap>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftBox>
              <SectionTitle
                align='left'
                title={"Twitter"}
                subtitle={"Twitter Update From the Group"}
              />
            </LeftBox>
          </Col>
          <Col lg={9}>
            <Row>
              <Col md={6} sm={12}>
                <TwitterTweetEmbed tweetId={"1487246223212179456"} />
              </Col>
              <Col md={6} sm={12}>
                <TwitterTweetEmbed tweetId={"1487015185738915845"} />
              </Col>
              {/* {featuredBlogs && featuredBlogs.map(featuredBlog => (
                                <Col md={6} key={featuredBlog.node.fields.slug}>
                                    <FeaturedBlogWrap>
                                        <Blog content={featuredBlog.node} />
                                    </FeaturedBlogWrap>
                                </Col>
                            ))} */}
            </Row>
          </Col>
        </Row>
      </Container>
    </BlogWrap>
  );
};

BlogArea.propTypes = {
  data: PropTypes.shape({
    section_title: PropTypes.shape(SectionTitleType),
    featuredBlog: PropTypes.shape(BlogType),
    recentBlogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
  }),
};

export default BlogArea;
