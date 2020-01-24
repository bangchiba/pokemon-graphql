const Stats = () => {
  return (
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
  )
}

export default Stats
