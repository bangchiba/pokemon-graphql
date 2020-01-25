import { useQuery } from '@apollo/react-hooks'
import { POKEMONS } from '../graphql/Pokemon'

const Pokemons = () => {
  const limit = 40
  const { loading, data } = useQuery(POKEMONS, {
    variables: { first: limit },
  })

  if (loading) {
    return 'Loading ...'
  }

  return (
    <>
      <div id="lista-pokemon">
        <div className="page-header">
          <h1>
            Pokédex
            <small className="pull-right">
              Showing <span className="badge">{limit}</span> Pokémons
            </small>
          </h1>
        </div>
      </div>
      <div className="row">
        {data.val.map((val, i) => {
          return (
            <div className="col-lg-3" key={i}>
              <div className="pokemon panel panel-primary">
                <div className="panel-heading">
                  <h1>
                    {val.classification}
                    <small>{val.name}</small>
                    <span className="label label-primary pull-right">
                      #{val.number}
                    </span>
                  </h1>
                </div>
                <div className="panel-body">
                  <a href={`/pokemon/${val.id}`}>
                    <img
                      className="avatar center-block"
                      alt="avatar"
                      src={val.image}
                    />
                  </a>
                </div>
                <div className="panel-footer">
                  <div className="text-center">
                    {val.types.map((v, k) => {
                      return (
                        <a href={`/${v}`} key={k}>
                          <span
                            className={`label type type-${v.toLowerCase()}`}
                          >
                            {v}
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Pokemons
