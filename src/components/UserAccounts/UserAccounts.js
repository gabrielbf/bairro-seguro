import React from 'react';
import PropTypes from 'prop-types';
import './UserAccounts.css';
import MenuLinksSuperior from '../MenuLinksSuperior/MenuLinksSuperior';

class UserAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      usuarios: []
    }

    this.handleAtivar = this.handleAtivar.bind(this);
    this.listaUsuarios = [];
  }

  componentDidMount() {
    //fetch('https://cors-anywhere.herokuapp.com/https://bairroseguro.herokuapp.com/usuario')
    //.then(response => response.json())
    //.then(
    //  (result) => {
    //    this.setState({
    //      usuarios: result
    //    });
    //    console.log(result);
    //    this.listaUsuarios = result;
    //    //this.listaUsuarios = this.state.usuarios.map((usuario) =>
    //    //  <li className='list-group-item' key={usuario._id}>{usuario.nome} - {usuario.email}</li>
    //    //);
    //  },
    //  (error) => {
    //    this.setState({
    //      error
    //    });
    //  }
    //)
    let result = [{"_id":"626d4385c9c4917a2b567d85","nome":"Keith","email":"keithsarate.info@gmail.com","telefone":"51999403307","nomeUsuario":"keithusuario","senha":"keithsenha","tipo":"morador","__v":0},{"_id":"626e1971e0ecaa50a9436d87","nome":"Keith 7","email":"keithsarate.info@gmail.com","telefone":"51999403307","nomeUsuario":"keith","senha":"keithsenha","foto":"","tipo":"agente","__v":0},{"_id":"626e1b11e0ecaa50a9436d8a","nome":"Gabriel","email":"gabriel@email.com","telefone":"(51) 999999999","nomeUsuario":"TrutaFalante","senha":"senha","foto":"","tipo":"agente","__v":0},{"_id":"626e1cd8e0ecaa50a9436d8d","__v":0},{"_id":"626e1e79e0ecaa50a9436d91","nome":"Gabriel teste promises fetch","email":"gabriel@email.com","telefone":"(51) 999999999","nomeUsuario":"KingKong","senha":"senha","foto":"","tipo":"administrador","__v":0}];

    this.listaUsuarios = result;
    this.setState({
      usuarios: result
    });
  }

  handleAtivar(event) { 
    //TODO
  }

  render() {
    return (
      <div className="UserAccounts container">
        <MenuLinksSuperior ativo='userAccounts' />
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-uppercase mb-0'>Lista de Usuários</h5>
              </div>

              <div className='table-responsive'>
                <table className='table no-wrap mb-0'>
                  <thead>
                    <tr>
                      <th scope='col' className='border-0 text-uppercase font-medium'>Nome</th>
                      <th scope='col' className='border-0 text-uppercase font-medium'>Nome de Usuário</th>
                      <th scope='col' className='border-0 text-uppercase font-medium'>E-Mail</th>
                      <th scope='col' className='border-0 text-uppercase font-medium'>Tipo Usuário</th>
                      <th scope='col' className='border-0 text-uppercase font-medium'>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.usuarios.map(usuario => 
                      <tr key={usuario._id}>
                        <td>
                          <h5>{usuario.nome}</h5>
                        </td>
                        <td>
                          <span className='text-muted'>{usuario.nomeUsuario}</span>
                        </td>
                        <td>
                          <span className='text-muted'>{usuario.email}</span>
                        </td>
                        <td>
                          <span className='text-muted'>{usuario.tipo}</span>
                        </td>
                        <td>
                          <button className='btn btn-secondary' value='Ativar' onClick={this.handleAtivar}>Ativar</button>
                        </td>
                      </tr>
                    )}
                    <tr>

                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
UserAccounts.propTypes = {};

UserAccounts.defaultProps = {};

export default UserAccounts;
