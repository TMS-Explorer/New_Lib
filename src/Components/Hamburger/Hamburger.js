import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Hamburger.css'

const Hamburger = () => {
  return (
    <Menu noOverlay>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/?genre=Comics">
        Comics
      </a>
      <a className="menu-item" href="/?genre=Tamil">
        Tamil
      </a>
    </Menu>
  )
}

export default Hamburger