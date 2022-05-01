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
    this.handleBlurPass = this.handleBlurPass.bind(this);
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

    if (name === 'estado'){
      this.setState({
        uf: value
      });
    }
  }

  handleBlurPass(event) {
    if (event.target.value !== this.state.senha) {
      alert('Senhas são diferentes');
      document.getElementsByName("confirmacaoSenha")[0].focus();
      document.getElementsByName("confirmacaoSenha")[0].select();
    }
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

    let valorVazio = false;
    let valoresVazios = Array();
    Object.keys(this.state)
      .map( key => {
        if(this.state[key] == ''){
          valorVazio = true;
          valoresVazios.push(key);
        }
      });
    
    if(valorVazio){
      alert("Campos: \n\n" + valoresVazios.join(', ') + '\n\nestão vazios');
    } else {
      var payload = {
        "nome": this.state.nome,
        "email": this.state.email,
        "telefone": this.state.telefone,
        "rua": this.state.rua,
        "numero": this.state.numero,
        "bairro": this.state.bairro,
        "cep": this.state.cep,
        "cidade": this.state.cidade,
        "estado": this.state.estado,
        "uf": this.state.uf,
        "nomeUsuario": this.state.nomeUsuario,
        "senha": this.state.senha,
        "tipo": this.state.tipo,
        "foto": ""
      }

      //TODO Destravar em https://cors-anywhere.herokuapp.com/corsdemo
      fetch('https://cors-anywhere.herokuapp.com/https://bairroseguro.herokuapp.com/usuario', {
        method: 'post',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        alert('Usuário criado com sucesso');
        console.log('Sucesso', data);
        window.location = '/';
      })
      .catch((error) => {
        alert('Erro ao criar usuário.\n' + error)
        console.error('Erro', error);
      });
    }

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
      <div className='UserForm container'>
        <MenuLinksSuperior ativo='userForm'/>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-uppercase mb-0'>Registrar Usuário</h5>
              </div>

              <form id='userForm' onSubmit={this.handleSubmit}>
                <div className='row'>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='nome' className='form-control' type='text' value={this.state.nome} onChange={this.handleChange} />
                      <label htmlFor='nome' className='form-label'>Nome</label>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='email' className='form-control' type='email' value={this.state.email} onChange={this.handleChange} />
                      <label htmlFor='email' className='form-label'>E-Mail</label>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='telefone' className='form-control' type='text' value={this.state.telefone} onChange={this.handleChange} />
                      <label htmlFor='telefone' className='form-label'>Telefone</label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='rua' className='form-control' type='text' value={this.state.rua} onChange={this.handleChange} />
                      <label htmlFor='rua' className='form-label'>Rua</label>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='numero' className='form-control' type='text' value={this.state.numero} onChange={this.handleChange} />
                      <label htmlFor='numero' className='form-label'>Número</label>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='bairro' className='form-control' type='text' value={this.state.bairro} onChange={this.handleChange} />
                      <label htmlFor='bairro' className='form-label'>Bairro</label>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='cep' className='form-control' type='text' value={this.state.cep} onChange={this.handleChange} />
                      <label htmlFor='cep' className='form-label'>CEP</label>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='cidade' className='form-control' type='text' value={this.state.cidade} onChange={this.handleChange} />
                      <label htmlFor='cidade' className='form-label'>Cidade</label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <select value={this.state.estado} className='form-select' id='estado' name='estado' onChange={this.handleChange}>
                        <option value=''>Selecione o Estado</option>
                        <option value='AC'>Acre</option>
                        <option value='AL'>Alagoas</option>
                        <option value='AP'>Amapá</option>
                        <option value='AM'>Amazonas</option>
                        <option value='BA'>Bahia</option>
                        <option value='CE'>Ceará</option>
                        <option value='DF'>Distrito Federal</option>
                        <option value='ES'>Espírito Santo</option>
                        <option value='GO'>Goiás</option>
                        <option value='MA'>Maranhão</option>
                        <option value='MT'>Mato Grosso</option>
                        <option value='MS'>Mato Grosso do Sul</option>
                        <option value='MG'>Minas Gerais</option>
                        <option value='PA'>Pará</option>
                        <option value='PB'>Paraíba</option>
                        <option value='PR'>Paraná</option>
                        <option value='PE'>Pernambuco</option>
                        <option value='PI'>Piauí</option>
                        <option value='RJ'>Rio de Janeiro</option>
                        <option value='RN'>Rio Grande do Norte</option>
                        <option value='RS'>Rio Grande do Sul</option>
                        <option value='RO'>Rondônia</option>
                        <option value='RR'>Roraima</option>
                        <option value='SC'>Santa Catarina</option>
                        <option value='SP'>São Paulo</option>
                        <option value='SE'>Sergipe</option>
                        <option value='TO'>Tocantins</option>
                        <option value='EX'>Estrangeiro</option>
                      </select>
                      <label htmlFor='estado' className='form-label'>Estado</label>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='uf' className='form-control' type='text' value={this.state.uf} onChange={this.handleChange} readOnly/>
                      <label htmlFor='uf' className='form-label'>UF</label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='nomeUsuario' className='form-control' type='text' value={this.state.nomeUsuario} onChange={this.handleChange} />
                      <label htmlFor='nomeUsuario' className='form-label'>Nome de Usuário</label>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='mb-3 form-floating'>
                      <select value={this.state.tipo} className='form-select' id='tipo' name='tipo' onChange={this.handleChange}>
                        <option value=''>Selecione o tipo</option>
                        <option value='agente'>Agente</option>
                        <option value='administrador'>Administrador</option>
                      </select>
                      <label htmlFor='tipo' className='form-label'>Tipo de Usuário</label>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='senha' className='form-control' type='password' value={this.state.senha} onChange={this.handleChange} />
                      <label htmlFor='senha' className='form-label'>Senha</label>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='mb-3 form-floating'>
                      <input placeholder='' name='confirmacaoSenha' className='form-control' type='password' value={this.state.confirmacaoSenha} 
                        onBlur={this.handleBlurPass} onChange={this.handleChange} />
                      <label htmlFor='confirmacaoSenha' className='form-label'>Confirmar Senha</label>
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <label htmlFor='foto' className='col-sm-2 col-form-label'>Foto de Usuário</label>
                  <div className='col-sm-4'>
                    <input name='foto' className='form-control' type='file' value={this.state.foto} onChange={this.handleChange} />
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
          </div>
        </div>
      </div>
    );
  }
}
UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
