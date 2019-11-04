import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  const isHomePage = (props.location.pathname === '/');
  return (
    <nav className="nav-wrapper black">
      <ul>
        {
          !(isHomePage) && (
            <li><Link to="/"><i className="material-icons">arrow_back</i></Link></li>
          )
        }
        <b>{props.title}</b>
      </ul>
    </nav>
  )
}

export default withRouter(NavBar);