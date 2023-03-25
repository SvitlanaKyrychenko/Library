const express = require('express');

const app = express();

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

  res.json(authors);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
