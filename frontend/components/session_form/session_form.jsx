import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.closeModal = this.props.closeModal.bind(this);
    // this.props.closeModal = this.props.closeModal.bind(this)
  }

  componentDidMount() {
    this.props.removeSessionErrors();
  }

  update(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.closeModal();
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demoUser = { email: "demo@gmail.com", password: "demo1234" }
    this.props.processForm(demoUser);
    this.closeModal();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const loginForm = () => {
      return(
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Please sign in</h2>
            {this.renderErrors()}
            <div className="login-form">
              <br />

                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Email"
                />

              <br />
    
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />

              <br />
              <br />
              <input className="session-submit" type="submit" value="Sign In" />
            </div>
          </form>

          <br />
            <p> - or - </p>
          <br />

          <form onSubmit={this.loginDemoUser} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <input className="session-submit" type="submit" value="Demo Login" />
            </div>
          </form>
        </div>
      )
    }

    const signupForm = () => {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Welcome to PortlandTable!</h2>
            {this.renderErrors()}
            <div className="login-form">
              <br />

                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="login-input"
                  placeholder="First Name *"
                />

              <br />

              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
                placeholder="Last Name *"
              />

              <br />

                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Enter email *"
                />

              <br />

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Enter password *"
                />

              <br />
              <br />
              <input className="session-submit" type="submit" value="Create Account" />
            </div>
          </form>
        </div>
      )
    }

    return (this.props.formType === 'login') ? loginForm() : signupForm();

  }
}

export default SessionForm;