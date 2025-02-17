module.exports = `
type Article implements Node @childof(type: "Mdx"){
    id: ID!
    title: String!
    slug: String!
    postedAt: BlogDate!
    image: Image
    quote_text: String
    quote_author: String
    video_link: String
    categories: [Meta]!
    tags: [Meta]!
    format: Format!
    excerpt: String!
    is_featured: Boolean
    author: Author @link(from: "author", by: "name")
    description: String!
    content: String
    type: String
}
type BlogDate {
    date: Date! @dateformat
    slug: String!
}
type Meta {
    title: String!
    slug: String!
}
enum Format {
    quote
    image
    video
}
`;
