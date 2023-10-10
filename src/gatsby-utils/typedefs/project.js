module.exports = `
type Project implements Node @childOf(types: ["Mdx"]){
    id: String!
    title: String!
    body: String!
    type: String
    cluster: String!
    slug: String!
    postedAt: ProjectDate!
    image: Image
    description: String!
    author: Author @link(from: "author", by: "name")
    is_featured: Boolean
    tags: [Meta]!
}

type ProjectDate {
    date: Date! @dateformat
    slug: String!
}

type Meta {
    title: String!
    slug: String!
}
`;
