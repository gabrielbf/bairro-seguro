import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';
import MenuLinksSuperior from '../MenuLinksSuperior/MenuLinksSuperior';

//const UserForm = () => (
//  <div className="UserForm">
//    UserForm Component
//  </div>
//);

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      rua: '',
      numero: '',
      bairro: '',
      cep: '',
      cidade: '',
      estado: '',
      uf: '',
      nomeUsuario: '',
      senha: '',
      confirmacaoSenha: '',
      foto: '',
      tipo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.limparForm = this.limparForm.bind(this);
  }

  handleChange(event) {
    // TODO Validação aqui
    const target = event.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Nome enviado: ' + this.state.nome + '\n' +
    'E-Mail enviado: ' + this.state.email + '\n' +
    'Telefone enviado: ' + this.state.telefone + '\n' +
    'Rua enviada: ' + this.state.rua + '\n' +
    'Numero enviado: ' + this.state.numero + '\n' +
    'Bairro enviado: ' + this.state.bairro + '\n' +
    'CEP enviado: ' + this.state.cep + '\n' + 
    'Cidade enviada: ' + this.state.cidade + '\n' +
    'Estado enviado: ' + this.state.estado + '\n' +
    'UF enviada: ' + this.state.uf + '\n' +
    'Nome de Usuário enviado: ' + this.state.nomeUsuario + '\n' +
    'Senha enviada: ' + this.state.senha + '\n' +
    'Foto enviada: ' + this.state.foto + '\n' +
    'Tipo de Usuário enviado: ' + this.state.tipo + '\n'
    );
    event.preventDefault();
  }
  
  limparForm(event) {
    this.setState({
      nome: '',
      email: '',
      telefone: '',
      rua: '',
      numero: '',
      bairro: '',
      cep: '',
      cidade: '',
      estado: '',
      uf: '',
      nomeUsuario: '',
      senha: '',
      confirmacaoSenha: '',
      foto: '',
      tipo: ''
    });
  }

  render() {
    return (
      <div className='container'>
        <MenuLinksSuperior ativo='userForm'/>
        <form id='userForm' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-4'>
              <div className='mb-3'>
                <label htmlFor='nome' className='form-label'>Nome</label>
                <input name='nome' className='form-control' type='text' value={this.state.nome} onChange={this.handleChange} />
              </div>
            </div>
            <div className='col-4'>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>E-Mail</label>
                <input name='email' className='form-control' type='email' value={this.state.email} onChange={this.handleChange} />
              </div>
            </div>
            <div className='col-4'>
              <div className='mb-3'>
                <label htmlFor='telefone' className='form-label'>Telefone</label>
                <input name='telefone' className='form-control' type='text' value={this.state.telefone} onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label htmlFor='rua' className='form-label'>Rua</label>
              <input name='rua' className='form-control' type='text' value={this.state.rua} onChange={this.handleChange} />

            </div>
            <div className='col-2'>
              <label htmlFor='numero' className='form-label'>Número</label>
              <input name='numero' className='form-control' type='text' value={this.state.numero} onChange={this.handleChange} />
            </div>
            <div className='col-2'>
              <label htmlFor='bairro' className='form-label'>Bairro</label>
              <input name='bairro' className='form-control' type='text' value={this.state.bairro} onChange={this.handleChange} />
            </div>
            <div className='col-2'>
              <label htmlFor='cep' className='form-label'>CEP</label>
              <input name='cep' className='form-control' type='text' value={this.state.cep} onChange={this.handleChange} />
            </div>
            <div className='col-2'>
              <label htmlFor='cidade' className='form-label'>Cidade</label>
              <input name='cidade' className='form-control' type='text' value={this.state.cidade} onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label htmlFor='estado' className='form-label'>Estado</label>
              <input name='estado' className='form-control' type='text' value={this.state.estado} onChange={this.handleChange} />
            </div>
            <div className='col-2'>
              <label htmlFor='uf' className='form-label'>UF</label>
              <input name='uf' className='form-control' type='text' value={this.state.uf} onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='col-5'>
              <label htmlFor='nomeUsuario' className='form-label'>Nome de Usuário</label>
              <input name='nomeUsuario' className='form-control' type='text' value={this.state.nomeUsuario} onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <label htmlFor='senha' className='form-label'>Senha</label>
              <input name='senha' className='form-control' type='password' value={this.state.senha} onChange={this.handleChange} />
            </div>
            <div className='col-6'>
              <label htmlFor='confirmacaoSenha' className='form-label'>Confirmar Senha</label>
              <input name='confirmacaoSenha' className='form-control' type='password' value={this.state.confirmacaoSenha} onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <label htmlFor='foto' className='form-label'>Foto de Usuário</label>
              <input name='foto' className='form-control' type='file' value={this.state.foto} onChange={this.handleChange} />
            </div>
            <div className='col-6'>
              <label htmlFor='tipo' className='form-label'>Tipo de Usuário</label>
              <input name='tipo' className='form-control' type='text' value={this.state.tipo} onChange={this.handleChange} />
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-5'>
            </div>
            <div className='col-1 gx-1'>
              <input className='btn btn-primary btn-lg' type="submit" value="Enviar" />
            </div>
            <div className='col-1 gx-1'>
              <input className='btn btn-secondary btn-lg' type="button" value='Limpar' onClick={this.limparForm} />
            </div>
            <div className='col-5'></div>
          </div>
        </form>
      </div>
    );
  }
}
UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
