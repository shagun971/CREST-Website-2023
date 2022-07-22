import image1 from "@data/images/our-work/big-data-330x330.jpg";
import image2 from "@data/images/our-work/security-330x330.jpg";
import image3 from "@data/images/our-work/socio-330x330.jpg";
import image4 from "@data/images/our-work/ledgers-330x330.jpg";
import image5 from "@data/images/our-work/software-330x330.jpg";

export const data = {
    title: "Our Work",
    subtitle:"",
    description: "At CREST researchers are leveraging existing software engineering, analytical reasoning, natural language processing and machine learning tools and techniques to develop a secure and integrated platform. Our aim is to help build a secure and integrated platform that is easy to use and evolve with the changing threat landscape and increase the operation efficiency of the cybersecurity team.",
    clusters: [
        {
        id: 1,
        image: { src: image1 },
        title: "Big Data",
        description: "",
        path: "https://crest-bigdata.github.io/",
        },
        {
        id: 2,
        image: { src: image2 },
        title: "Software Security Intelligence",
        description: "",
        },
        {
        id: 3,
        image: { src: image3 },
        title: "Socio-Technical",
        description: "",
        },
        {
        id: 4,
        image: { src: image4 },
        title: "TIPS",
        description: "",
        },
        {
        id: 5,
        image: { src: image5 },
        title: "Software System & Security Integration",
        description: "",
        },
    ],
};
