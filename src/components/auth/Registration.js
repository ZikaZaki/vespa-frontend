import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    /* eslint-disable camelcase */
    const {
      username,
      email,
      password,
      password_confirmation,
      registrationErrors,
    } = this.state;

    axios.post('http://localhost:3001/registrations', {
      user: {
        username,
        email,
        password,
        password_confirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      const { handleSuccessfulAuth } = this.props;
      // console.log('Registration response: ', response);
      if (response.data.status === 'created') {
        handleSuccessfulAuth(response.data);
      } else {
        this.setState({
          registrationErrors: response.data.errors,
        });
      }
    }).catch((error) => {
      console.log('Registration error: ', registrationErrors, error);
    });
    event.preventDefault();
  }

  render() {
    const {
      username, email, password, password_confirmation,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
    /* eslint-enable camelcase */
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
