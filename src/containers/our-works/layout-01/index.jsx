import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import BoxLargeImage from "@components/box-large-image/layout-01";
import MottoText from "@components/motto";
import { data } from "./../data";
import { SectionWrap, StyledAnchor, StyledSubtitle } from "./style";
import CustomSectionTitle from "@ui/custom-section-title";

const OurWorkSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <CustomSectionTitle
                            subtitle={data.subtitle}
                            title={data.title}
                            description={data.description}
                        />

                    </Col>
                </Row>
                <Row className="gutter-xl-70 vAlign">
                    {data.clusters.map((item) => {
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxLargeImage
                                    title={item.title}
                                    image={item.image}
                                    path={item.path}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default OurWorkSection;
