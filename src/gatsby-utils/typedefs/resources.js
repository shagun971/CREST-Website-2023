module.exports = `
type Resources implements Node @childOf(types: ["Mdx"]){
    id: String!
    body: String!
    type: String
}
`;
