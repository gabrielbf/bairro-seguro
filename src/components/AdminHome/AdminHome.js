import React from 'react';
import PropTypes from 'prop-types';
import './AdminHome.css';

import MenuLinksSuperior from '../MenuLinksSuperior/MenuLinksSuperior';
import BotoesAcoes from '../BotoesAcoes/BotoesAcoes';

const AdminHome = () => (
  <div className="AdminHome">
    <MenuLinksSuperior />
    <BotoesAcoes />
  </div>
);

AdminHome.propTypes = {};

AdminHome.defaultProps = {};

export default AdminHome;
