import React from 'react';
import PropTypes from 'prop-types';
import './MenuLinksSuperior.css';
import { Link } from 'react-router-dom';

const MenuLinksSuperior = () => (
  <div className="MenuLinksSuperior" role="navigation">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link disabled" aria-current="Home" href="#">Home</a>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/UserAccounts">Contas</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/UserForm">Usuários</Link>
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
