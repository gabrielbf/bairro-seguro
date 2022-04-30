import React from 'react';
import PropTypes from 'prop-types';
import './MapaAdmin.css';
import mapa from './maps.jpg';

const MapaAdmin = () => (
  <div className='MapaAdmin'>
    <img src={mapa} className='img-fluid rounded' alt='Google Maps' />
  </div>
);

MapaAdmin.propTypes = {};

MapaAdmin.defaultProps = {};

export default MapaAdmin;
