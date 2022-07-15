import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Navbar.module.css';

const UserProfilePanel = ({ display, username }) => (
  <div style={{ display }}>
    <ul>
      <li>{username}</li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </div>
);

UserProfilePanel.propTypes = {
  username: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

const Navbar = () => {
  const [visibleUser, setVisibleUser] = useState(false);
  const display = visibleUser ? 'block' : 'none';

  const toggleUser = () => {
    setVisibleUser((prevState) => !prevState);
  };

  return (
    <nav className={styles.Navbar}>
      <Link to="/" className={styles.Home}>Bookstore CMS</Link>
      <div>
        <ul className={styles.UlLinks}>
          <li>
            <Link to="/" className={styles.Link}>BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className={styles.Link}>CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        onClick={toggleUser}
        className={`fas fa-user ${styles.Oval}`}
      >
        <UserProfilePanel display={display} username="username" />
      </button>
    </nav>
  );
};

export default Navbar;
