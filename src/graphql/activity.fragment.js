import { graphql } from "gatsby";

export const query = graphql`
    fragment Activity on Activity {
        id
        title
        pageType
        content {
            id
            year
            title
            location
            description
            socials {
                id
                title
                link
            }
            images {
                src {
                    name
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            width: 500
                            height: 350
                            formats: WEBP
                            quality: 100
                            placeholder: DOMINANT_COLOR
                        )
                    }
                }
            }
            hosts {
                id
                name
                link
            }
        }
    }
`;
