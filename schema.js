const {buildSchema} = require('graphql');

const schema = buildSchema(`

  type Author {
    id: ID
    name: String
    books: [Book]
  }

  type Book {
    id: ID
    title: String
    genre: String
  }

  input AuthorInput{
    id: ID
    name: String!
    books: [BookInput]
  }

  input BookInput {
    id: ID
    title: String!
    genre: String!
  }

  type Query{
    getAllAuthors: [Author]
    getAuthor(id: ID): Author
  }

  type Mutation{
    createAuthor(input: AuthorInput): Author
  }

`);


module.exports = schema;