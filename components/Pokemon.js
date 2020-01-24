import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import Tabs from './Tabs'
import { POKEMON } from '../graphql/Pokemon'
import Data from './Data'
import Stats from './Stats'
import Evolution from './Evolution'

const Pokemon = () => {
  const { query } = useRouter()

  const { loading, data } = useQuery(POKEMON, { variables: { id: query.id }})

  if (loading) {
    return 'Loading ...'
  }

  return (
    <div>
    <div className="page-header">
      <h1>
        Bulbasaur
        <small>Seed Pokémon</small>
        <span className="label label-primary pull-right">#101</span>
      </h1>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img className="avatar center-block" alt={data.val.name} src={`${data.val.image}`} />
      </div>
      <div className="col-md-6">
        <Tabs
          items={[
            { title: 'Pokédex' },
            { title: 'Stats' },
            { title: 'Evolution' },
          ]}
        >
        {({ tabIndex }) => (
          <>
            <div className="tab-content">
              {tabIndex === 0 && <Data data={data.val} />}
              {tabIndex === 1 && <Stats data={data.val} />}
              {tabIndex === 2 && <Evolution data={data.val.evolutions} />}
            </div>
          </>
        )}
        </Tabs>
      </div>
    </div>
  </div>
  )
}

export default Pokemon
