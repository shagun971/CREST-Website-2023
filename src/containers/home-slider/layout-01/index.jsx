import ImageFour from "@data/images/blog/blog-05-1170x600.jpg";
import ImageOne from "@data/images/home-slider/peer-to-peer-1170x600.jpg";
import ImageThree from "@data/images/home-slider/talk-1170x600.jpg";
import Button from "@ui/button";
import Image from "@ui/image";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import { Col, Container, Row } from "@ui/wrapper";
import PropTypes from "prop-types";
import { ItemType } from "@utils/types";

import React from "react";
import {
  SectionWrap,
  SlideContent,
  SlideContentDescription,
  SlideContentTitle,
  SlideWrapper,
  SlideContentDescriptionText,
} from "./style";

const sliderSettings = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  pagination: true,
  breakpoints: {
    1440: {
      slidesPerView: 1,
    },
  },
};

const HomeSlider = ({ data }) => {
  return (
    <SectionWrap>
      <Container>
        <Row>
          <Col lg={12}>
            {data?.items && (
              <SwiperSlider options={sliderSettings} paginationTop="80px">
                {data.items?.map((item) => {
                  return (
                    <SwiperSlide className="item" id={item.id}>
                      <SlideWrapper>
                        <Image src={item.images?.[0].src} alt="Slider" />
                        <SlideContent>
                          <Row>
                            <SlideContentTitle>{item.title}</SlideContentTitle>
                          </Row>
                        </SlideContent>
                        <SlideContentDescription>
                          <Row>
                            <SlideContentDescriptionText>
                              {item.description}
                              <Button
                                className="button"
                                path={item.path}
                                variant="texted"
                                fontWeight={800}
                                disableHover={true}
                                icondistance="8px"
                                icon="far fa-long-arrow-right"
                                color="secondary"
                                size="medium"
                              >
                                Discover now
                              </Button>
                            </SlideContentDescriptionText>
                          </Row>
                        </SlideContentDescription>
                      </SlideWrapper>
                    </SwiperSlide>
                  );
                })}
              </SwiperSlider>
            )}
          </Col>
        </Row>
      </Container>
    </SectionWrap>
  );
};

HomeSlider.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
  }),
};

export default HomeSlider;
