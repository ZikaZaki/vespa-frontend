import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginErrors: '',
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
    const {
      email,
      password,
      loginErrors,
    } = this.state;

    axios.post(
      'http://localhost:3001/sessions',
      {
        user: {
          email,
          password,
        },
      },
      { withCredentials: true },
    ).then((response) => {
      // console.log('Login response: ', response);
      const { handleSuccessfulAuth } = this.props;
      if (response.data.logged_in) {
        handleSuccessfulAuth(response.data);
      } else {
        this.setState({
          loginErrors: response.data.errors,
        });
      }
    }).catch((error) => {
      console.log('Login error: ', loginErrors, error);
      // console.log('Login error: ', error);
    });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
