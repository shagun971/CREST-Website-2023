import { graphql } from "gatsby";

export const query = graphql`
    fragment ProjectFull on Project {
        id
        title
        slug
        tags {
            title
            slug
        }
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        quality: 100
                        breakpoints: 5
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
            alt
        }
        author {
            name
            slug
            bio
            socials {
                id
                title
                link
                icon
            }
            image {
                src {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 100
                            formats: WEBP
                            breakpoints: 5
                            placeholder: DOMINANT_COLOR
                        )
                    }
                }
            }
        }
        postedAt {
            date(formatString: "LL")
            slug
        }
        description
        body
    }
`;
