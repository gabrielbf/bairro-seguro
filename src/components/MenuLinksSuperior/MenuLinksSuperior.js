import React from 'react';
import PropTypes from 'prop-types';
import './MenuLinksSuperior.css';
import { Link } from 'react-router-dom';

class MenuLinksSuperior extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='MenuLinksSuperior' role='navigation'>
        <ul className='nav'>
          <li className='nav-item'>
            {this.props.ativo === 'home'
              ? <Link className='nav-link disabled' aria-current='Home' to='/'>Home</Link>
              : <Link className='nav-link' to='/'>Home</Link>
            }
          </li>
          <li className='nav-item'>
            {this.props.ativo === 'userAccounts'
              ? <Link className='nav-link disabled' aria-current='UserAccounts' to='/UserAccounts'>Contas</Link>
              : <Link className='nav-link' to='/UserAccounts'>Contas</Link>
            }
          </li>
          <li className='nav-item'>
            {this.props.ativo === 'userForm'
              ? <Link className='nav-link disabled' aria-current='UserForms' to='/UserForm'>Usuários</Link>
              : <Link className='nav-link' to='/UserForm'>Usuários</Link>
            }
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Configurações</a>
          </li>
        </ul>
      </div>
    )
  }
}

MenuLinksSuperior.propTypes = {};

MenuLinksSuperior.defaultProps = {};

export default MenuLinksSuperior;
