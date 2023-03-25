const express = require('express');

const app = express();

app.get('/api/authors', (req, res) => {
  const authors = [ 
{id: 1, name: 'John Silver',books: [{id:1, title: "John FB", genre:"science"},
                                    {id:2, title: "John SB", genre:"detective"}]},
{id: 2, name: 'J.K.R', books: [{id:3, title: "J.K.R FB", genre:"science"},
                               {id:4, title: "J.K.R SB", genre:"adventure"}]},
{id: 3, name: 'Richard Duhkins', books: [{id:5, title: "Richard FB", genre:"fiction"},
                                         {id:6, title: "Richard SB", genre:"adventure"}]}
]


  res.json(authors);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
