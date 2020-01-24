import { gql } from 'apollo-boost'

export const POKEMONS = gql`
  query($first: Int!) {
    val : pokemons(first: $first) {
        id
        name
        image
        types
        classification
    }
  }
`

export const POKEMON = gql`
  query($id: String) {
    val: pokemon(id: $id) {
      id
      number
      name
      image
      types
      evolutions {
        id
        name
        image
      }
    }
  }
`