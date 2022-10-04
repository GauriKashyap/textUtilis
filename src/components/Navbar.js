import React from 'react'
import PropTypes from 'prop-types'
import Toggle from '../Toggle';
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">textUtilis</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <Toggle/>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )

/* Navbar.defaultProps is used to keep a default properties for elements in which their is no property is entered.*/
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About Text here"
}

/* Here "PropTypes.string.isRequired" means that the tittle is mandatory, if title is not there then it might show some sort of error. Note that this will give only error only if their is no default title being set. */
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired, 
//   aboutText: PropTypes.string
}

