import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import { Col, Row } from "@ui/wrapper";
import PropTypes from "prop-types";
import React from "react";
import {
    DateWrap, Description, Dots, HostName, Item, Line, Photo, TimelineFeature,
    TimelineFeatureInner,
    TimelineInfo,
    TimelineInfoInner, TimelineList, TimelineRow, TimelineWrap, Title
} from "./style";

const Timeline = ({ items }) => {
  let rendered = [];
  const getYear = (year) => {
    if (!rendered.includes(year)) {
        rendered.push(year);
        return year;
    }
    return "";
  }
  return (
    <TimelineWrap>
      <TimelineList>
        <Line />
        {items?.map(({ id, year, images, title, description, socialNetworks, hosts }, i) => {
          return (
            <Item key={id} align={"left"}>
              <Dots />
              <TimelineRow>
                <TimelineFeature>
                  <TimelineFeatureInner>
                    <DateWrap>{getYear(year)}</DateWrap>
                  </TimelineFeatureInner>
                </TimelineFeature>
                <TimelineInfo>
                  <TimelineInfoInner>
                    <Row>
                      <Col>{title && <Title>{title}</Title>}</Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        {images?.[0]?.src && (
                          <Photo>
                            <Image
                              src={images[0].src}
                              alt={images[0]?.alt || "timeline"}
                            />
                          </Photo>
                        )}
                      </Col>
                      <Col lg={8}>
                        {hosts && (
                          <Social size='medium' space='20px'>
                            {Object.entries(hosts).map(
                              ([hostName, profileUrl]) => (
                                <SocialLink path={profileUrl}>
                                  <i className='fa social-link-icon fa-user'></i>
                                  <HostName>{hostName}</HostName>
                                </SocialLink>
                              )
                            )}
                          </Social>
                        )}
                        {description && (
                          <Description>{description}</Description>
                        )}
                        {socialNetworks && (
                          <Social size='medium' space='20px'>
                            {"twitter" in socialNetworks && (
                              <SocialLink path={socialNetworks["twitter"]}>
                                <i className='fab fa-twitter social-link-icon'></i>
                              </SocialLink>
                            )}
                            {"linkedin" in socialNetworks && (
                              <SocialLink path={socialNetworks["linkedin"]}>
                                <i className='fab fa-linkedin social-link-icon'></i>
                              </SocialLink>
                            )}
                            {"youtube" in socialNetworks && (
                              <SocialLink path={socialNetworks["youtube"]}>
                                <i className='fab fa-youtube social-link-icon'></i>
                              </SocialLink>
                            )}
                          </Social>
                        )}
                      </Col>
                    </Row>
                  </TimelineInfoInner>
                </TimelineInfo>
              </TimelineRow>
            </Item>
          );
        })}
      </TimelineList>
    </TimelineWrap>
  );
};

Timeline.propTypes = {
  items: PropTypes.array,
};

export default Timeline;
