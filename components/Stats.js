import PropTypes from 'prop-types'

const Stats = ({ data }) => {
  return (
    <div id="stats">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>HP</strong>
          <span className="badge">{data.maxHP}</span>
        </li>
        <li className="list-group-item">
          <strong>CP</strong>
          <span className="badge">{data.maxCP}</span>
        </li>
        <li className="list-group-item">
          <strong>Flee Rate</strong>
          <span className="badge">{data.fleeRate}</span>
        </li>
      </ul>
    </div>
  )
}

Stats.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Stats
