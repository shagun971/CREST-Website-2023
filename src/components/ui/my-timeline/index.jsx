import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import {
  TimelineWrap,
  TimelineList,
  Line,
  Item,
  Dots,
  TimelineRow,
  TimelineFeature,
  TimelineFeatureInner,
  TimelineInfo,
  TimelineInfoInner,
  DateWrap,
  Photo,
  TimelineContent,
  Title,
  Description,
} from "./style";
import { Col, Row } from "react-bootstrap";

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
        {items?.map(({ id, year, images, title, description }, i) => {
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
                        {description && (
                          <Description>{description}</Description>
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
