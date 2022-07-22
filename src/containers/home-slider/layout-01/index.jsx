import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Image from "@ui/image";
import ImageThree from "@data/images/home-slider/talk-1170x600.jpg";
import ImageTwo from "@data/images/home-slider/big-data-1440-600.jpg";
import ImageOne from "@data/images/home-slider/peer-to-peer-1170x600.jpg";
import ImageFour from "@data/images/blog/blog-05-1170x600.jpg";
import { SectionWrap } from "./style";

const sliderSettings = {
    slidesPerView: 1,
    loop: false,
    autoplay: false,
    pagination: true,
    breakpoints: {
        1440: {
            slidesPerView: 1,
        },
    },
};

const HomeSlider = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider
                            options={sliderSettings}
                            paginationTop="80px"
                        >
                            <SwiperSlide className="item">
                                <Image src={ImageOne} alt="Slider" />
                            </SwiperSlide>
                            {/* <SwiperSlide className="item">
                                <Image src={ImageTwo} alt="Slider" />
                            </SwiperSlide> */}
                            <SwiperSlide className="item">
                                <Image src={ImageThree} alt="Slider" />
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <Image src={ImageFour} alt="Slider" />
                            </SwiperSlide>
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default HomeSlider;
