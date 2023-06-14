import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Timeline from "@ui/my-timeline";
import PropTypes from "prop-types";
import { SectionWrap } from "./style";

const TimelineArea = ({ content}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Timeline items={content} />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

TimelineArea.propTypes = {
  content: PropTypes.array,
};

export default TimelineArea;
