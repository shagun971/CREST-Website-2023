import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PopupVideoTwo from "@ui/popup-video/layout-02";
import { SectionWrap } from "./style";
import images from './imageImports';

const videoData = [
    { 
        link: "https://www.youtube.com/watch?v=1S5drvhJaKY", 
        title: "GitHub SOCRATES Training",
        image: images.image1
    },
    { 
        link: "https://www.youtube.com/watch?v=LY3nXQjMJmo", 
        title: "Developers' discussions about security challenges of different programming languages",
        image: images.image2
    },
    { 
        link: "https://www.youtube.com/watch?v=Co_PqcG-DXg", 
        title: "LineVD: Statement-level Vulnerability Detection using Graph Neural Networks",
        image: images.image3
    },
    { 
        link: "https://www.youtube.com/watch?v=LPeMjo8dUIw", 
        title: "116-TECH-CROFT",
        image: images.image4
    },
    { 
        link: "https://www.youtube.com/watch?v=C97fAd93BSY", 
        title: "On the Use of Fine-Grained Vulnerable Code Statements for Software Vulnerability Assessment Models",
        image: images.image5
    },
    { 
        link: "https://www.youtube.com/watch?v=zctWy4zdqhY", 
        title: "Analytics over Encrypted Traffic and Defences",
        image: images.image6
    },
    { 
        link: "https://www.youtube.com/watch?v=zg-GwJjYdEw", 
        title: "CyberSecurity4AI & AI4CyberSecurity",
        image: images.image7
    },
    { 
        link: "https://www.youtube.com/watch?v=dCDQp-3idC4", 
        title: "Well Begun is Half Done: An Empirical Study of Exploitability & Impact of Base-Image Vulnerabilities",
        image: images.image8
    },
    { 
        link: "https://www.youtube.com/watch?v=DAgOliuFEcc", 
        title: "KGSecConfig: A Knowledge Graph Based Approach for Secured Container Orchestrator Configuration",
        image: images.image9
    },
    { 
        link: "https://www.youtube.com/watch?v=3_XysfuPF-A", 
        title: "An Investigation into Inconsistency of Software Vulnerability Severity across Data Sources",
        image: images.image10
    },
    { 
        link: "https://www.youtube.com/watch?v=WpDx2QIFP7c", 
        title: "Developers’ discussions about security challenges of different programming languages",
        image: images.image11
    },
    { 
        link: "https://www.youtube.com/watch?v=pveQo19ZPeA", 
        title: "Falling for Phishing: An Empirical Investigation into People's Email Response Behaviors",
        image: images.image12
    },
    { 
        link: "https://www.youtube.com/watch?v=YhuZvtkfPPo", 
        title: "DeepCVA: Automated Commit-level Vulnerability Assessment with Deep Multi-task Learning",
        image: images.image13
    },
    { 
        link: "https://www.youtube.com/watch?v=Ajc4kWLMBZQ", 
        title: "An Empirical Study of Rule-Based & Learning-Based Approaches for Static Application Security Testing",
        image: images.image14
    },
    { 
        link: "https://www.youtube.com/watch?v=GN5sTddZmy4", 
        title: "Taxonomy of Edge Blockchain Network Designs",
        image: images.image15
    },
    { 
        link: "https://www.youtube.com/watch?v=bo7I1D6hd5g", 
        title: "A Grounded Theory of the Role of Coordination in Software Security Patch Management",
        image: images.image16
    },
    { 
        link: "https://www.youtube.com/watch?v=5MtABLSxeRo", 
        title: "QuickAdapt: Scalable Adaptation for Big Data Cyber Security Analytics",
        image: images.image17
    },
    { 
        link: "https://www.youtube.com/watch?v=k2y4lcm3fLo", 
        title: "Evaluation of Big Data Systems in Edge and Cloud Environments",
        image: images.image18
    },
    { 
        link: "https://www.youtube.com/watch?v=-Pihuj1ebG8", 
        title: "Mining Questions Asked about Continuous Software Engineering: A Case Study of Stack Overflow",
        image: images.image19
    },
    { 
        link: "https://www.youtube.com/watch?v=SgAmX6CFb0o", 
        title: "Security Awareness of End Users of Mobile Health Applications: An Empirical Study",
        image: images.image20
    },
];

const PopupVideoArea = () => {
    return (
        <SectionWrap>
            <Container>
                {Array(Math.ceil(videoData.length / 4)).fill().map((_, rowIndex) => (
                    <Row key={rowIndex} style={{ marginBottom: '40px' }}>
                        {videoData.slice(rowIndex * 4, (rowIndex + 1) * 4).map((video, colIndex) => (
                            <Col key={colIndex} md={3} className="popup-one">
                                <PopupVideoTwo
                                    image={{ src: video.image }}
                                    video_button={{ link: video.link }}
                                />
                                <div>{video.title}</div>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </SectionWrap>
    );
};

export default PopupVideoArea;
