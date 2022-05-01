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
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    //this.setState({email: event.target.email})
  }

  handleSubmit(event) {
    alert('Nome substituido: ' + this.state.nome + '\n' +
    'E-Mail substituido: ' + this.state.email
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='nome' className='form-label'>Nome</label>
            <input name='nome' className='form-control' type='text' value={this.state.nome} onChange={this.handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>E-Mail</label>
            <input name='email' className='form-control' type='email' value={this.state.email} onChange={this.handleChange} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
