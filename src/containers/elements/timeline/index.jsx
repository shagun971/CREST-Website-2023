import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Timeline from "@ui/my-timeline";
import { SectionWrap } from "./style";

import ImageOne from "@data/images/box-image/timeline-image-01.jpg";
import ImageTwo from "@data/images/box-image/timeline-image-02.jpg";
import ImageThree from "@data/images/box-image/timeline-image-03.jpg";

const content = [
  {
    id: 1,
    year: "2022",
    images: [{ src: ImageOne }],
    title:
      "May, 10th - CREST and SCS lab (Sydney) Workshop to share ideas and discuss potential collaboration",
    description: "Workshop description...",
  },
  {
    id: 2,
    year: "2022",
    images: [{ src: ImageOne }],
    title: "Feb, 9th - Effective time management and combating procastination",
    description: "Workshop description...",
  },
  {
    id: 3,
    year: "2022",
    images: [{ src: ImageThree }],
    title: "Apr, 1st - Edge Intelligence Challenges in Next-Generation Network",
    description: "Workshop description...",
  },
  {
    id: 4,
    year: "2022",
    images: [{ src: ImageThree }],
    title: "May, 6th - The Art and Practice of Data Science Pipelines: A Comprehensive Study of Data Science Pipelines In Theory, In-The-Small, and In-The-Large.",
    description: "Workshop description...",
  },
];

const TimelineArea = () => {
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

export default TimelineArea;
