import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Fragment>
        <div className='navbar'>
            <Link to="/about">about us</Link>
            <Link to="/contact-us">contact us</Link>
        </div>
    </Fragment>
  )
}

export default Navbar