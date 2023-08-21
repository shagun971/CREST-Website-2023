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
                        <div>Developers' discussions about security challenges of different programming languages</div>
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=Co_PqcG-DXg",
                            }}
                        />
                        <div>LineVD: Statement-level Vulnerability Detection using Graph Neural Networks</div>
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=LPeMjo8dUIw",
                            }}
                        />
                    <div>116-TECH-CROFT</div>
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
                    <div>On the Use of Fine-Grained Vulnerable Code Statements for Software Vulnerability Assessment Models</div>
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=zctWy4zdqhY",
                            }}
                        />
                    <div>An Investigation into Inconsistency of Software Vulnerability Severity across Data Sources</div>
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=zg-GwJjYdEw",
                            }}
                        />
                    <div>CyberSecurity4AI & AI4CyberSecurity</div>
                    </Col>
                    <Col md={3} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=dCDQp-3idC4",
                            }}
                        />
                    <div>Well Begun is Half Done: An Empirical Study of Exploitability & Impact of Base-Image Vulnerabilities</div>
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

