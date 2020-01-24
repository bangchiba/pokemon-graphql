import { useState } from 'react'

const Tabs = ({ items, children }) => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <ul className="nav nav-tabs nav-justified">
        {items.map((tab, i) => (
          <li className={ index === i ? 'active' : ''} key={i}>
            <a onClick={() => setIndex(i)}>{tab.title}</a>
          </li>
        ))}
      </ul>
      {children({ tabIndex: index, tab: items[index] })}
    </>
  )
}

export default Tabs
