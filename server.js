const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema')


const authors = [ 
{id: 1, name: 'John Silver'},
{id: 2, name: 'J.K.R'},
{id: 3, name: 'Richard Duhkins'}
]

const books = [
  {id:1, author_id: 1, title: "John FB", genre:"science"},
  {id:2, author_id: 1, title: "John SB", genre:"detective"},
  {id:3, author_id: 2, title: "J.K.R FB", genre:"science"},
  {id:4, author_id: 2, title: "J.K.R SB", genre:"adventure"},
  {id:5, author_id: 3, title: "Richard FB", genre:"fiction"},
  {id:6, author_id: 3, title: "Richard SB", genre:"adventure"}
]

const app = express();
app.use(cors());

const createAuthor = (input) => {
  const id = Date.now();
  return{ id, ...input}
}

const root = {
  getAllAuthors: () => {
    return authors
  },
  getAuthor: ({id}) => {
    return authors.find(author => author.id ==id)
  },
  createAuthor: ({input}) => {
    const author = createAuthor(input)
    authors.push(author)
    return author
  }
};


app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  rootValue: root
}));

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
