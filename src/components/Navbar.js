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
      <Link to="/">Bookstore CMS</Link>
      <ul className={styles.UlLinks}>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <button type="button" onClick={toggleUser} className={styles.Profile}>
        <UserProfilePanel display={display} username="username" />
      </button>
    </nav>
  );
};

export default Navbar;
