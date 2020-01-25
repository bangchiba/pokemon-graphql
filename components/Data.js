import PropTypes from 'prop-types'

const Data = ({ data }) => {
  return (
    <div id="data">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Type</strong>
          <span className="pull-right">
            {data.types.map((val, i) => (
              <a href="/grass" key={i}>
                <span className={`label type type-${val.toLowerCase()}`}>
                  {val}
                </span>
              </a>
            ))}
          </span>
        </li>
        <li className="list-group-item">
          <strong>Height</strong>
          <span className="pull-right">
            {data.height
              ? `${data.height.minimum} - ${data.height.maximum}`
              : ''}
          </span>
        </li>
        <li className="list-group-item">
          <strong>Weight</strong>
          <span className="pull-right">
            {data.weight
              ? `${data.weight.minimum} - ${data.weight.maximum}`
              : ''}
          </span>
        </li>
        <li className="list-group-item">
          <strong>Resistant</strong>
          <ul>
            {data.resistant.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}

Data.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Data
