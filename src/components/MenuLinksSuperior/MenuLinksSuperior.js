import React from 'react';
import PropTypes from 'prop-types';
import './MenuLinksSuperior.css';

const MenuLinksSuperior = () => (
  <div className="MenuLinksSuperior" role="navigation">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link disabled" aria-current="Home" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Usuários</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Configurações</a>
      </li>
    </ul>
  </div>
);

MenuLinksSuperior.propTypes = {};

MenuLinksSuperior.defaultProps = {};

export default MenuLinksSuperior;
