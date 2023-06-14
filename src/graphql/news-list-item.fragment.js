import { graphql } from "gatsby";

export const query = graphql`
    fragment NewsListItem on News {
        title
        slug
        format
        categories {
            title
            slug
        }
        excerpt
        postedAt {
            date(formatString: "LL")
            slug
        }
        author {
            ...Author
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
        quote_text
        quote_author
        video_link
        description
    }
`;
