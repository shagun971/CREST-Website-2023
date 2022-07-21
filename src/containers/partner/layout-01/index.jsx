import React from "react";
import PropTypes from "prop-types";
import ClientLogo from "@ui/client-logo";
import { Container, Row, Col } from "@ui/wrapper";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import { ItemType } from "@utils/types";
import { SectionWrap } from "./style";
import SectionTitle from '@components/ui/section-title'

const slider = {
    slidesPerView: 6,
    loop: false,
    speed: 1000,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1499: {
            slidesPerView: 6,
        },
    },
};

const sliderStyle = {
    align: "center",
};

const PartnerArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle="CREST has collaboration with government and industry."
                            title="Our Key Collaborators"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        {data?.items && (
                            <SwiperSlider options={slider} vAlign="center">
                                {data.items?.map((item) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <ClientLogo
                                                layout={1}
                                                title={item.id}
                                                path={item.path}
                                                image={item.images?.[0]}
                                                hoverImage={item.images?.[1]}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </SwiperSlider>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap >
    );
};

PartnerArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PartnerArea;
