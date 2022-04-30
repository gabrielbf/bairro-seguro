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
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // TODO Validação aqui
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Nome substituido: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
