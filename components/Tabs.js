/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import PropTypes from 'prop-types'

const Tabs = ({ items, children }) => {
  const [index, setIndex] = useState(1)
  return (
    <>
      <ul className="nav nav-tabs nav-justified">
        {items.map((tab, i) => (
          <li className={index === i ? 'active' : ''} key={i}>
            <a href="#" onClick={() => setIndex(i)}>
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {children({ tabIndex: index, tab: items[index] })}
    </>
  )
}

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Tabs
