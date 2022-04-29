import React from 'react';
import PropTypes from 'prop-types';
import './AdminHome.css';

import MenuLinksSuperior from '../MenuLinksSuperior/MenuLinksSuperior';

const AdminHome = () => (
  <div className="AdminHome">
    <MenuLinksSuperior />
  </div>
);

AdminHome.propTypes = {};

AdminHome.defaultProps = {};

export default AdminHome;
