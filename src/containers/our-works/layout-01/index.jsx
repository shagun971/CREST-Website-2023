import BoxLargeImage from "@components/box-large-image/layout-01";
import CustomSectionTitle from "@ui/custom-section-title";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";
import { ItemType } from "@utils/types";
import PropTypes from "prop-types";

const OurWorkSection = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <CustomSectionTitle
                            subtitle={data.section_title.subtitle}
                            title={data.section_title.title}
                            description={data.section_title.description}
                        />

                    </Col>
                </Row>
                <Row className="gutter-xl-70 vAlign">
                    {data.items.map((item) => {
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxLargeImage
                                    title={item.title}
                                    image={item.images?.[0]}
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

OurWorkSection.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default OurWorkSection;
