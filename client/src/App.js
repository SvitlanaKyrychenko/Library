import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { CREATE_AUTHOR } from './mutation/author';
import { GET_ALL_AUTHORS } from './query/author';
//import { GET_ONE_USER } from './query/user';

function App() {
  const {data, loading, error, refetch} = useQuery(GET_ALL_AUTHORS)
 // const {data:oneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {
 //     variables: {
 //         id: 1
 //     }
 // })
  const [newAuthor] = useMutation(CREATE_AUTHOR)
  const [authors, setAuthors] = useState([])
  const [name, setName] = useState('')
  //const [age, setAge] = useState(0)

 // console.log(oneUser)

  useEffect(() => {
      if (!loading) {
          setAuthors(data.getAllAuthors)
      }
  }, [data])

  const addAuthor = (e) => {
      e.preventDefault()
      //console.log(age)
      newAuthor({
          variables: {
              input: {
                  name: name //, age: parseInt(age, 10)
              }
          }
      }).then(data => {
          console.log(data)
          setName('')
          //setAge(0)
      })
      .catch(err => console.log(err));
  } 

  const getAll = e => {
      e.preventDefault()
      refetch()
  }

  if (loading) {
      return <h1>Loading...</h1>
  }

// <input value ={age} onChange={e => setAge(e.target.value)} type="number"></input>
  return (
    <div>
      <form>
        <input value ={name} onChange={e => setName(e.target.value)} type="text"></input>
    
        <div> 
          <button onClick={(e) => addAuthor(e)}>Create</button>
          <button onClick={(e) => getAll(e)}>Get</button>
        </div>
      </form>
      <div>
        {authors.map(author =>
          <div>{author.id}. {author.name} {author.books}</div>
          )}
      </div>
    </div>
  );
}

export default App;
