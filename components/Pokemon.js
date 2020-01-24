const Pokemon = () => {
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
          <img className="avatar center-block" src="img/pokemons/bulbasaur.jpg"/>
        </div>

        <div className="col-md-6" ng-controller="TabsController as tabs">
          <ul className="nav nav-tabs nav-justified">
            <li className="active">
              <a data-tab="#data">Pokédex</a>
            </li>
            <li className="">
              <a data-tab="#stats">Stats</a>
            </li>
            <li className="">
              <a data-tab="#evolution">Evolution</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="data">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Type</strong>
                  <span className="pull-right">
                    <a href="/grass">
                      <span className="label type type-grass">Grass</span>
                    </a>
                    <a href="/poison">
                      <span className="label type type-poison">Poison</span>
                    </a>
                  </span>
                </li>
                <li className="list-group-item">
                  <strong>Height</strong>
                  <span className="pull-right">2′4″ (0.71m)</span>
                </li>
                <li className="list-group-item">
                  <strong>Weight</strong>
                  <span className="pull-right">15.2 lbs (6.9 kg)</span>
                </li>
                <li className="list-group-item">
                  <strong>Abilities</strong>
                  <ul>
                    <li>Overgrow</li>
                    <li>Chlorophyll</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div id="stats">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>HP</strong>
                  <span className="badge">45</span>
                </li>
                <li className="list-group-item">
                  <strong>Attack</strong>
                  <span className="badge">49</span>
                </li>
                <li className="list-group-item">
                  <strong>Defense</strong>
                  <span className="badge">49</span>
                </li>
                <li className="list-group-item">
                  <strong>Special Attack</strong>
                  <span className="badge">65</span>
                </li>
                <li className="list-group-item">
                  <strong>Special Defense</strong>
                  <span className="badge">65</span>
                </li>
                <li className="list-group-item">
                  <strong>Speed</strong>
                  <span className="badge">45</span>
                </li>
                <li className="list-group-item">
                  <strong>Total</strong>
                  <span className="badge">318</span>
                </li>
              </ul>
            </div>

            <div id="evolution">
              <div className="text-center">
                <a href="/pokemon/ivysaur">
                  <img src="img/pokemons/bulbasaur.jpg" width="160" />
                  <p>
                    <strong>Bulbasaur</strong>
                  </p>
                </a>
                <span className="glyphicon glyphicon-arrow-down" />
              </div>
              <div className="text-center">
                <a href="/pokemon/ivysaur">
                  <img src="img/pokemons/ivysaur.jpg" width="160" />
                  <p>
                    <strong>Ivysaur</strong>
                  </p>
                </a>
                <span className="glyphicon glyphicon-arrow-down" />
              </div>
              <div className="text-center">
                <a href="/pokemon/ivysaur">
                  <img src="img/pokemons/venusaur.jpg" width="160" />
                  <p>
                    <strong>Venusaur</strong>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
