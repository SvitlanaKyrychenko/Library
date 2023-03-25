import {gql} from '@apollo/client'

export const GET_ALL_AUTHORS = gql`
   query{
     getAllAuthors{
        id,name,books
     }
   }
`

export const GET_ONE_AUTHOR = gql`
    query getAuthor($id: ID){
        getAuthor(id: $id) {
            id, name, books
        }
    }    
`