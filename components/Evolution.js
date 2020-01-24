const Evolution = ({ data })  => {
  const len = data.length - 1;
  return (
    <>
      {data.map((val, i) => (
        <div className="text-center" key={i}>
          <a href={`/pokemon/${val.id}`}>
            <img src={val.image} alt={val.name} width="160" />
            <p>
              <strong>Venusaur</strong>
            </p>
          </a>
          {len != i && (
            <span className="glyphicon glyphicon-arrow-down" />
          )}
      </div>
      ))}
    </>
  )
}

export default Evolution
