import React from 'react';
import PropTypes from 'prop-types';
import './MenuLinksSuperior.css';

const MenuLinksSuperior = () => (
  <div className="MenuLinksSuperior" role="navigation">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link disabled" aria-current="Home" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Usuários</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Configurações</a>
      </li>
    </ul>
  </div>
);

MenuLinksSuperior.propTypes = {};

MenuLinksSuperior.defaultProps = {};

export default MenuLinksSuperior;
