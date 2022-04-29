import React from 'react';
import PropTypes from 'prop-types';
import './BotoesAcoes.css';
import BotaoAcao from '../BotaoAcao/BotaoAcao'

const BotoesAcoes = () => (
  <div className="BotoesAcoes">
    <BotaoAcao quantidade="3" nomeAcao="Contas Pendentes"/>
    <BotaoAcao quantidade="1" nomeAcao="Emergência"/>
    <BotaoAcao quantidade="3" nomeAcao="Denúncias ativas"/>
    <BotaoAcao quantidade="6" nomeAcao="Agentes"/>
  </div>
);

BotoesAcoes.propTypes = {};

BotoesAcoes.defaultProps = {};

export default BotoesAcoes;
