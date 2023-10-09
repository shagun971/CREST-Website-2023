module.exports = `
type Activity implements Node {
    id: ID!
    title: String!
    pageType: String!
    content: [ActivityContent]
}

type ActivityHost {
    id: ID
    name: String!
    link: String
}

type ActivitySocial {
    id: ID!
    title: String!
    link: String!
    icon: String
}

type ActivityContent {
    id: ID!
    year: String!
    images: [Image]
    title: String!
    hosts: [ActivityHost]
    location: String
    description: String!
    socials: [Social]
}
`;

