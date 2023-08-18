import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PopupVideoOne from "@ui/popup-video/layout-01";
import PopupVideoTwo from "@ui/popup-video/layout-02";
import ImageOne from "@data/images/box-image/video-image-01.jpg";
import { SectionWrap } from "./style";

const PopupVideoArea = () => {
    return (
        <SectionWrap>
            <Container>
                <Row style={{ marginBottom: '40px' }}>
                    <Col md={3} className="popup-one">
                        <PopupVideoTwo
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=1S5drvhJaKY",
                            }}
                        />
                        <div>GitHub SOCRATES Training</div>
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=LY3nXQjMJmo",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=Co_PqcG-DXg",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=LPeMjo8dUIw",
                            }}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '40px' }}>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=C97fAd93BSY",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=zctWy4zdqhY",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=zg-GwJjYdEw",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=dCDQp-3idC4",
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=5MtABLSxeRo",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=3_XysfuPF-A",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=WpDx2QIFP7c",
                            }}
                        />
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=pveQo19ZPeA",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default PopupVideoArea;

