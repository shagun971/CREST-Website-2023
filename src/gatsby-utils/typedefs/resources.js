module.exports = `
type Resources implements Node @childof(type: "Mdx"){
    id: String!
    content: String
    type: String
}
`;
