const Data = ({ data }) => {
  console.log('data', data)
  return (
    <div id="data">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Type</strong>
          <span className="pull-right">
            {data.types.map((val, i) => (
              <a href="/grass" key={i}>
                <span className="label type type-grass">{val}</span>
              </a>
            ))}
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
  )
}

export default Data
