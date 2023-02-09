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
    const { showModal } = this.props;
    return (
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-2xl text-center font-medium text-gray-900 dark:text-white">Create an account</h3>
        <form className="space-y-6" onSubmit={this.handleSubmit}>
          <div>
            <label 
              for="username" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your username
            </label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="username"
              value={username}
              onChange={this.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              required 
            />
          </div>
          <div>
            <label 
              for="email" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
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
          </div>
          <div>
            <label 
              for="password" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
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
          </div>
          <div>
            <label 
              for="password_confirmation" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Confirm your password
            </label>
            <input 
              type="password" 
              name="password_confirmation" 
              id="password_confirmation" 
              placeholder="••••••••"
              value={password_confirmation}
              onChange={this.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark_limerick focus:border-very_dark_limerick block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              required 
            />
          </div>
          <button type="submit" className="w-full text-white bg-dark_limerick hover:bg-very_dark_limerick focus:ring-2 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{' '} 
            <a 
              href="#" 
              className="text-blue-700 hover:underline dark:text-blue-500"
              onClick={() => showModal('LOGIN')}>Login to your account</a>
          </div>
        </form>
      </div>
    );
    /* eslint-enable camelcase */
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
