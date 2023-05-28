module.exports = `
type Resources implements Node @childOf(types: ["Mdx"]){
    id: String!
    title: String!
    body: String!
    type: String
}
`;
