import React, { useState, useEffect } from 'react';
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

const getTabPartialUrl = (url) => (
  url.includes('/categories') ? 'CAT' : 'BOO'
);

const Navbar = () => {
  const [visibleUser, setVisibleUser] = useState(false);
  const [active, setActive] = useState('');
  const display = visibleUser ? 'block' : 'none';

  useEffect(() => {
    const partialUrl = getTabPartialUrl(window.location.href);
    setActive(partialUrl);
  }, []);

  const toggleUser = () => {
    setVisibleUser((prevState) => !prevState);
  };

  const toggleActiveTab = ({ target }) => {
    const activeTab = getTabPartialUrl(target.href);
    setActive(activeTab);
  };

  return (
    <nav className={styles.Navbar}>
      <Link
        to="/"
        onClick={toggleActiveTab}
        className={styles.Home}
      >
        Bookstore CMS
      </Link>
      <div>
        <ul className={styles.UlLinks}>
          <li>
            <Link
              to="/"
              style={{ opacity: (active === 'BOO') ? 1 : 0.4 }}
              onClick={toggleActiveTab}
              className={styles.Link}
            >
              BOOKS
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              style={{ opacity: (active === 'CAT') ? 1 : 0.4 }}
              onClick={toggleActiveTab}
              className={styles.Link}
            >
              CATEGORIES
            </Link>
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
