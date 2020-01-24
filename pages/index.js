import { POKEMONS } from '../graphql/pokemon'
import { useQuery } from '@apollo/react-hooks'

const Index = () => {
  const { loading, data } = useQuery(POKEMONS, {
    variables: { first: 10}
  })

  if (loading) {
    return 'Loading ...';
  }

  return (
    <>
      <h1>Nama Pokemon</h1>
      <ul>
        {data.val.map((val, i) => {
          return (
            <li key={i}>{val.name}</li>
          )
        })}
      </ul>
    </>
  )
}

export default Index
