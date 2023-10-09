import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import { Col, Row } from "@ui/wrapper";
import PropTypes from "prop-types";
import React from "react";
import {
  DateWrap,
  Description,
  Dots,
  HostName,
  Item,
  Line,
  Photo,
  TimelineFeature,
  TimelineFeatureInner,
  TimelineInfo,
  TimelineInfoInner,
  TimelineList,
  TimelineRow,
  TimelineWrap,
  Title,
  Location,
} from "./style";

const Timeline = ({ items }) => {
  let rendered = [];
  const getYear = (year) => {
    if (!rendered.includes(year)) {
      rendered.push(year);
      return year;
    }
    return "";
  };
  return (
    <TimelineWrap>
      <TimelineList>
        <Line />
        {items?.map(
          (
            { id, year, images, title, description, socials, hosts, location },
            i
          ) => {
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
                        {images?.[0]?.src && (
                          <Col lg={4}>
                            <Photo>
                              <Image
                                src={images[0].src}
                                alt={images[0]?.alt || "timeline"}
                              />
                            </Photo>
                          </Col>
                        )}
                        <Col lg={images?.[0]?.src ? 8 : 11}>
                          {hosts && (
                            <Social size="medium" space="24px">
                              {hosts.map((host) => (
                                <SocialLink path={host.link} id={host.id}>
                                  <i className="fa social-link-icon fa-user"></i>
                                  <HostName>{host.name}</HostName>
                                </SocialLink>
                              ))}
                            </Social>
                          )}
                          {location && (
                            <Social size="medium" space="20px">
                              <i className="fab social-link-icon fa-location"></i>
                              <Location>{location}</Location>
                            </Social>
                          )}
                          {description && (
                            <Description>{description}</Description>
                          )}
                          {socials && (
                            <Social size="medium" space="20px">
                              {socials.map((social) => (
                                <SocialLink path={social.link} id={social.id}>
                                  <i
                                    className={`fab fa-${social.title} social-link-icon`}
                                  ></i>
                                </SocialLink>
                              ))}
                            </Social>
                          )}
                        </Col>
                      </Row>
                    </TimelineInfoInner>
                  </TimelineInfo>
                </TimelineRow>
              </Item>
            );
          }
        )}
      </TimelineList>
    </TimelineWrap>
  );
};

Timeline.propTypes = {
  items: PropTypes.array,
};

export default Timeline;
