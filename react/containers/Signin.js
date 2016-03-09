import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { authActions } from 'goommerce-redux';

const Signin = React.createClass({
  propTypes: {
    login: PropTypes.func.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.refs;
    this.props.login(email.value, password.value).then(
      () => this.context.router.push('/'),
      () => alert('Invalid username/password.') // eslint-disable-line no-alert
    );
  },
  render: function render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          ref="email"
        />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          ref="password"
        />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  },
});

export default connect(
  undefined, authActions
)(Signin);
