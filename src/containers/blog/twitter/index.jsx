import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import ProgressCirle from "@ui/progress-circle/layout-01";
import { BoxWrap, CenterBox, LeftBox } from "./style";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterArea = ({ data }) => {
  return (
    <BoxWrap>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftBox>
              <SectionTitle
                align="left"
                title={"Twitter"}
                subtitle={"Twitter Update From the Group"}
              />
            </LeftBox>
          </Col>
          <Col lg={9}>
            <Row>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="crest_uofa"
                options={{ height: 640 }}
                placeholder={
                  <CenterBox>
                    <ProgressCirle value={45} />
                    <h6>Loading 'crest_uofa' Timeline ...</h6>
                  </CenterBox>
                }
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </BoxWrap>
  );
};

export default TwitterArea;
