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
      const { handleSuccessfulAuth } = this.props;
      if (response.data.logged_in) {
        handleSuccessfulAuth(response.data);
      } else {
        this.setState({
          loginErrors: response.data.errors,
        });
      }
    }).catch((error) => {
      this.setState({
        loginErrors: error,
      });
      alert('Login error: ', loginErrors);
    });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    const { showModal } = this.props;
    return (
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-2xl text-center font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        <form className="space-y-6" onSubmit={this.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={this.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={this.handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </label>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start">
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-dark_limerick dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-very_dark_limerick dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                Remember me
              </label>
            </div>
            <a href="##" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-dark_limerick hover:bg-very_dark_limerick focus:ring-2 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            {' '}
            <a
              href="##"
              className="text-blue-700 hover:underline dark:text-blue-500"
              onClick={() => showModal('REGISTER')}
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};
