import React from 'react';
import PropTypes from 'prop-types';
import './AdminHome.css';

import MenuLinksSuperior from '../MenuLinksSuperior/MenuLinksSuperior';
import BotoesAcoes from '../BotoesAcoes/BotoesAcoes';
import MapaAdmin from '../MapaAdmin/MapaAdmin';

const AdminHome = () => (
  <div className='AdminHome container'>
    <div className='row'>
      <div className='col-11'>
        <MenuLinksSuperior ativo='home'/>
      </div>
      <div className='col-1'>
        Sair
      </div>
    </div>
    <div className='row'>
      <div className='col text-center'>
        <BotoesAcoes />
      </div>
      </div>
      <div className='row'>
      <div className='col text-center'>
        <MapaAdmin />
      </div>
    </div>
  </div>
);

AdminHome.propTypes = {};

AdminHome.defaultProps = {};

export default AdminHome;
