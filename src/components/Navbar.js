import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        Post
      </Link>
      {isAuthenticated ? (
        <Link to={"/logout"}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Logout
        </Link>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Login
        </Link>
      )}
    </nav>
  )
}

export default Navbar