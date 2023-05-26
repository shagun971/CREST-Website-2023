import { graphql } from "gatsby";

export const query = graphql`
    fragment AllResources on Resources {
        id
        type
        body
    }
`;
