import PropTypes from 'prop-types'

const Evolution = ({ data }) => {
  return (
    <>
      {data.map((val, i) => (
        <div className="text-center" key={i}>
          <a href={`/pokemon/${val.id}`}>
            <img src={val.image} alt={val.name} width="160" />
            <p>
              <strong>{val.name}</strong>
            </p>
          </a>
          {data.length - 1 !== i && (
            <span className="glyphicon glyphicon-arrow-down" />
          )}
        </div>
      ))}
    </>
  )
}

Evolution.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Evolution
