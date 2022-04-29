import React from 'react';
import PropTypes from 'prop-types';
import './BotaoAcao.css';

const BotaoAcao = (props) => (
  <div className="BotaoAcao">
    <button type="button" className="btn btn-primary btn-lg">
      {props.quantidade} {props.nomeAcao}
    </button>
  </div>
);

BotaoAcao.propTypes = {};

BotaoAcao.defaultProps = {};

export default BotaoAcao;
