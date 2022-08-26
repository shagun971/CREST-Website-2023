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
                    <DateWrap>
                      {getYear(year)}
                    </DateWrap>
                  </TimelineFeatureInner>
                </TimelineFeature>
                <TimelineInfo>
                  <TimelineInfoInner>
                    <TimelineContent>
                      {title && <Title>{title}</Title>}
                      {description && <Description>{description}</Description>}
                    </TimelineContent>
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
